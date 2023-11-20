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
    <div className="w-full bg-accent rounded-lg">
      <div className="flex flex-row items-center justify-between p-8 w-full h-full">
        <div
          className={cn('', {
            'bg-yellow-300': props.position === 1,
            'bg-gray-500': props.position === 2,
            'w-24 h-24': props.position === 1,
            'w-16 h-16': props.position === 2,
            'rounded-full': medal,
            'flex items-center justify-center': medal,
            'pl-6': !medal,
          })}
        >
          <p
            className={cn('font-bold text-foreground text-2xl', {
              'text-black': medal,
              'text-6xl': props.position === 1,
              'text-3xl': props.position === 2,
            })}
          >
            {props.position}
          </p>
        </div>
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <div className="border rounded-full border-foreground flex items-center pl-4 pr-2 pt-2 pb-3">
          <span className="text-foreground font-bold text-xl ">
            {props.poopCount}{' '}
          </span>
          <span className="text-foreground text-xl">💩</span>
        </div>
        <img
          className={cn('w-16 h-16 rounded-full', {
            'w-32 h-32': props.position === 1,
            'w-24 h-24': props.position === 2,
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
