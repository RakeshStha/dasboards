import React from 'react'
import { PieChart, Pie,  Tooltip } from 'recharts';

const test = () => {
    const data = [
        {name:"Facebook", usr: 100000},
        {name:"Twitter", usr: 200000},
        {name:"Instagram", usr: 30000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},
        
        {name:"google", usr: 600000},
        {name:"google", usr: 600000},{name:"google", usr: 600000},
        

    ]

    return (
        <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="usr"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        <Tooltip />
        </PieChart>

        </div>
    )
}

export default test
