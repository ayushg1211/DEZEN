import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const barData = [
  { name: '1–30 Days', employees: 27 },
  { name: '30–60 Days', employees: 55 },
  { name: '60 and Above', employees: 61 },
];

export function VerticalChart() {
  return (
    <BarChart width={350} height={250} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'Number of Employees', angle: -90, position: 'insideMiddle' }} />
      <Tooltip />
      <Bar dataKey="employees" fill="#15803D">
        <LabelList dataKey="employees" position="top" />
      </Bar>
    </BarChart>
  );
}
