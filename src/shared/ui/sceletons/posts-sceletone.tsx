import { PostCardSkeleton } from "./post-card-sceleton";

export default function PostsGridSkeleton() {
  return (
    <section className="container mx-auto">
      {/* <div className="mb-12 flex justify-center">
        <div className="h-12 w-72 animate-pulse rounded bg-gray-200" />
      </div> */}

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}