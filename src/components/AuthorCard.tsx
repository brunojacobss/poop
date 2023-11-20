import { cn } from '@/lib/utils';

type AuthorCardProps = {
  name: string;
  imageUrl?: string;
  poopCount: number;
  position: number;
};

export function AuthorCard(props: AuthorCardProps): JSX.Element {
  const medal = props.position === 1 || props.position === 2;
  return (
    <div className="w-full bg-gradient-to-r dark:from-[#1e293b] dark:to-[#020817] from-gray-300 to-white rounded-lg">
      <div className="flex flex-row items-center justify-between sm:p-8 p-4 w-full h-full">
        <div
          className={cn('', {
            'bg-yellow-300': props.position === 1,
            'bg-gray-500': props.position === 2,
            'sm:w-24 sm:h-24': props.position === 1,
            'sm:w-16 sm:h-16': props.position === 2,
            'w-12 h-12': props.position === 1,
            'w-8 h-8': props.position === 2,
            'rounded-full': medal,
            'flex items-center justify-center': medal,
            'sm:pl-6': !medal,
          })}
        >
          <p
            className={cn('font-bold text-foreground sm:text-2xl text-lg', {
              'text-black': medal,
              'sm:text-6xl': props.position === 1,
              'sm:text-3xl': props.position === 2,
            })}
          >
            {props.position}
          </p>
        </div>
        <h1 className="sm:text-2xl text-sm font-bold">{props.name}</h1>
        <div className="border rounded-full border-foreground flex items-center pl-4 pr-2 pt-2 pb-3">
          <span className="text-foreground font-bold sm:text-xl text-sm">
            {props.poopCount}{' '}
          </span>
          <span className="text-foreground sm:text-xl text-sm">💩</span>
        </div>
        <img
          className={cn('w-16 h-16 rounded-full', {
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
