import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('signout API Being implemented');
});

export { router as signoutRouter };
