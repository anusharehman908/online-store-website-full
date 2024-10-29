import React from 'react';

const OrderConfirmation = ({ name, orderNumber, message }) => {
  return (
    <div className="order-confirmation">
      <h3>Order Confirmation</h3>
      <p>Hi {name},</p>
      <p>Thank you for your order! Your order number is <strong>{orderNumber}</strong>.</p>
      <p>{message}</p>
      <p>We will notify you once your order is shipped.</p>
    </div>
  );
};

export default OrderConfirmation;
