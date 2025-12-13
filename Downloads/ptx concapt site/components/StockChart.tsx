import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', price: 0.035 },
  { name: 'Feb', price: 0.040 },
  { name: 'Mar', price: 0.038 },
  { name: 'Apr', price: 0.042 },
  { name: 'May', price: 0.045 },
  { name: 'Jun', price: 0.048 },
  { name: 'Jul', price: 0.044 },
  { name: 'Aug', price: 0.050 },
  { name: 'Sep', price: 0.045 },
];

export const StockChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900">PTX.V</h3>
          <p className="text-gray-500 text-xs md:text-sm">TSX Venture Exchange</p>
        </div>
        <div className="text-right">
          <p className="text-2xl md:text-3xl font-bold text-brand-orange">0.045 <span className="text-xs md:text-sm font-normal text-gray-500">CAD</span></p>
          <p className="text-green-600 font-medium text-xs md:text-sm flex items-center justify-end">
             +0.002 (4.65%) <span className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </p>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e56417" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#e56417" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 10, fill: '#9ca3af'}} 
            dy={10}
            interval="preserveStartEnd"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 10, fill: '#9ca3af'}} 
            domain={['dataMin - 0.01', 'dataMax + 0.01']}
            tickFormatter={(value) => `$${value.toFixed(3)}`}
            width={40}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#e56417', fontWeight: 600 }}
            formatter={(value: number) => [`$${value}`, 'Price']}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#e56417" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
