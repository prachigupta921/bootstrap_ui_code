import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MyAreaChart = () => {
  const data = [
    { name: "Mar 1", sessions: 10000 },
    { name: "Mar 2", sessions: 30162 },
    { name: "Mar 3", sessions: 26263 },
    { name: "Mar 4", sessions: 18394 },
    { name: "Mar 5", sessions: 18287 },
    { name: "Mar 6", sessions: 28682 },
    { name: "Mar 7", sessions: 31274 },
    { name: "Mar 8", sessions: 33259 },
    { name: "Mar 9", sessions: 25849 },
    { name: "Mar 10", sessions: 24159 },
    { name: "Mar 11", sessions: 32651 },
    { name: "Mar 12", sessions: 31984 },
    { name: "Mar 13", sessions: 38451 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sessions"
          stroke="#007bff"
          fillOpacity={0.2}
          fill="#007bff"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
