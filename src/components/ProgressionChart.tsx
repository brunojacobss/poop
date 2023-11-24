import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {
  chartData: {
    date: string;
    count: number;
  }[];
};

export default function ProgressionChart({ chartData }: Props) {
  return (
    <div className="sm:mt-24 mt-16 sm:h-96 h-48">
      <h1 className=" sm:text-2xl text-center text-lg mb-8">Progresión</h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} width={100}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={[0, 'dataMax']} />
          <XAxis dataKey="date" />
          <Tooltip
            contentStyle={{ color: 'white', backgroundColor: '#2e2e2e' }}
            formatter={(value) => [value, '💩']}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorCount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
