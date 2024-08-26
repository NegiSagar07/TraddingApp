import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Chart = () => {

    const data = [
        { name: '9AM', price: 24500 },
        { name: '10AM', price: 24400 },
        { name: '11AM', price: 24700 },
        { name: '12AM', price: 24720 },
        { name: '1AM', price: 24490 },
        { name: '2AM', price: 24773 },
        { name: '3AM', price: 24873 },

    ];

  return (
    <div>
        <LineChart width={900} height={500} data={data}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis domain={['datamin-1000', 'datamax']} />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
  )
}

export default Chart