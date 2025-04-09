import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const timelineData = [
  { year: 2025, count: 27 },
  { year: 2024, count: 43 },
  { year: 2023, count: 63 },
  { year: 2022, count: 20 },
  { year: 2021, count: 46 },
  { year: 2020, count: 55 },
];

export function BarCharts() {
  return (
    <BarChart width={460} height={209} data={timelineData} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" label={{ value: 'Number of Iqama expiry', position: 'insideBottom', offset: -5 }} />
      <YAxis type="category" dataKey="year" />
      <Tooltip />
      <Bar dataKey="count" fill="#0F4C5C">
        <LabelList dataKey="count" position="right" />
      </Bar>
    </BarChart>
  );
}
