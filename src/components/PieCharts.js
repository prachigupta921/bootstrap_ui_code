import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Blue', value: 12.21 },
  { name: 'Red', value: 15.58 },
  { name: 'Yellow', value: 11.25 },
  { name: 'Green', value: 8.32 },
];

const COLORS = ['#007bff', '#dc3545', '#ffc107', '#28a745'];

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={100}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
