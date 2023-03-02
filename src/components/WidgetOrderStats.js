import React, { useState, useEffect } from 'react';
import OrderStat from './OrderStat';
import '../styles/WidgetOrderStats.css';
import data from '../data/data.json';

function WidgetOrderStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(data.stats);
  }, []);

  return (
    <div className="widget-order-stats">
      {stats.map((stat) => (
        <OrderStat
          key={stat.id}
          title={stat.title}
          amount={stat.amount}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}

export default WidgetOrderStats;
