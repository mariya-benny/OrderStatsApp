import React from 'react';
import '../styles/OrderStat.css';

function OrderStat(props) {
  const { title, amount, icon } = props;

  return (
    <div className="order-stat">
      <div className="order-stat-icon">{icon}</div>
      <div className="order-stat-title">{title}</div>
      <div className="order-stat-amount">{amount}</div>
    </div>
  );
}

export default OrderStat;

