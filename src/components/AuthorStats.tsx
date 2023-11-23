import type { ReactNode } from 'react';

type Props = {
  poops: { createdAt: string }[];
  poopsByDate: Record<string, number>;
};

const Card = ({
  title,
  content,
}: {
  title: string;
  content: string | number;
}) => {
  return (
    <div className="w-full dark:bg-[#2e2e2e]/[0.5] p-4 dark:border-[#2e2e2e] border border-gray-300  bg-gray-200/[0.5]  rounded-lg">
      <h1 className="text-center sm:text-xl text-lg font-semibold">{title}</h1>
      <hr className="my-4 h-0.5 dark:bg-[#2e2e2e] bg-gray-300 opacity-100 dark:opacity-50" />
      <h3 className="text-lg text-center">{content}</h3>
    </div>
  );
};

export default function AuthorStats({ poops, poopsByDate }: Props) {
  const highestPoopDay = Object.keys(poopsByDate).reduce((a, b) =>
    poopsByDate[a] > poopsByDate[b] ? a : b
  );
  return (
    <div className="grid gap-4 sm:grid-cols-3 grid-cols-2">
      <Card title="Total 💩" content={poops.length} />
      <Card title="Días 💩" content={Object.keys(poopsByDate).length} />
      <Card
        title="💩 x Día"
        content={(poops.length / Object.keys(poopsByDate).length).toFixed(2)}
      />
      <Card
        title="Día + 💩"
        content={`${highestPoopDay} (${poopsByDate[highestPoopDay]})`}
      />
    </div>
  );
}
