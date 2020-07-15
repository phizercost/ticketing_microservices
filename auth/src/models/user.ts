import mongoose from 'mongoose';
import { Password } from '../services/password';

//An interface that describes the properties that are required to create a new User

interface UserAttrs {
  email: string;
  password: string;
}

// An interface describing the properties that a User model has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//An interface describing the properties of a User Document

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  //If there are extra properties they are to be added here
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String, //Only for mongoose, TypeScript does not know this String
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password; //Remove the password property from the object so that it is not rendered
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  //Helps create a new user working around the issue of compatibility TypeScript <-> Mongoose  => Involving TypeScript in the creation of a user
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
