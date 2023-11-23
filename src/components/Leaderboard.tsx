import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';
import { AuthorCard } from './AuthorCard';
const builder = imageUrlBuilder(sanityClient);

type Props = {
  authors: { id: string; name: string; poops: number; image: any }[];
};
export default function Leaderboard({ authors }: Props) {
  return authors.map((author, i) => (
    <div key={author.id} className="mb-4">
      <a href={`authors/${author.id}`}>
        <AuthorCard
          id={author.id}
          name={author.name}
          poopCount={author.poops}
          position={i + 1}
          imageUrl={author.image && builder.image(author.image).url()}
        />
      </a>
    </div>
  ));
}
