import { cn } from '@/lib/utils';

type AuthorCardProps = {
  name: string;
  id: string;
  imageUrl?: string;
  poopCount: number;
  position: number;
};

export function AuthorCard(props: AuthorCardProps): JSX.Element {
  const medal = props.position === 1 || props.position === 2;
  return (
    <div className="w-full dark:bg-[#2e2e2e]/[0.5] dark:border-[#2e2e2e] border border-gray-300  bg-gray-200/[0.5]  rounded-lg">
      <div className="flex flex-row items-center justify-between sm:p-8 p-4">
        <div
          className={cn(
            'dark:border-[#2e2e2e] border border-gray-300 rounded-full flex items-center justify-center sm:w-16 sm:h-16 w-8 h-8',
            {
              'bg-yellow-200': props.position === 1,
              'bg-white/50': props.position === 2,
              'sm:w-24 sm:h-24': props.position === 1,
              'w-12 h-12': props.position === 1,
            }
          )}
        >
          <p
            className={cn('font-semibold text-foreground sm:text-2xl text-lg', {
              'text-black': medal,
              'sm:text-5xl': props.position === 1,
              'text-2xl': props.position === 1,
              'sm:text-3xl': props.position === 2,
            })}
          >
            {props.position}
          </p>
        </div>
        <h1 className="sm:text-2xl text-sm font-semibold">
          {props.name.split(' ')[0]}
        </h1>
        <div className="border rounded-full border-gray-300 dark:border-[#2e2e2e] flex items-center px-4 py-2">
          <span className="text-foreground font-bold sm:text-xl text-sm">
            {props.poopCount}{' '}
          </span>
          <span className="text-foreground sm:text-xl text-sm">💩</span>
        </div>
        <img
          className={cn('sm:w-24 sm:h-24 w-16 h-16 rounded-full', {
            'sm:w-32 sm:h-32': props.position === 1,
            'sm:w-24 sm:h-24': props.position === 2,
          })}
          src={
            props.imageUrl ||
            'https://thumbs.dreamstime.com/z/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg'
          }
          alt={props.name}
        />
      </div>
    </div>
  );
}
