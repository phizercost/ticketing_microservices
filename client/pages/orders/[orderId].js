import { useEffect, useState } from 'react';
const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const findTimeLeft = () => {
      const minutesLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(minutesLeft / 1000));
    };
    findTimeLeft(); // To allow run immediately before waiting for 1 second
    const timerId = setInterval(findTimeLeft, 1000);

    //Stop the timer so that it does not run forever
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order expired</div>;
  }
  return <div>Time left to pay: {timeLeft} seconds</div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
