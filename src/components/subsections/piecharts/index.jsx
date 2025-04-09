import React from 'react'

import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Active', value: 33.3 },
  { name: 'Expiring soon', value: 33.3 },
  { name: 'Expired', value: 33.3 },
];

const COLORS = ['#0A8834', '#F3B604', '#BF1B1B'];

export function PieCharts() {
  return (
    <PieChart width={245} height={245}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
        outerRadius={80}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}