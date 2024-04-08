import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'January', Revenue: 4215 },
  { name: 'February', Revenue: 5312 },
  { name: 'March', Revenue: 6251 },
  { name: 'April', Revenue: 7841 },
  { name: 'May', Revenue: 9821 },
  { name: 'June', Revenue: 14984 },
];

const CustomBarChart = () => {
  return (
    <BarChart
      width={450}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Revenue" fill="#007bff" />
    </BarChart>
  );
};

export default CustomBarChart;
