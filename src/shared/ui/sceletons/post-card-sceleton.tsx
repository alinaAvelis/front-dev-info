export function PostCardSkeleton() {
  return (
    <article className="border border-gray-200 p-4">
      <div className="animate-pulse">
        {/* title */}
        <div className="mb-3 h-10 w-4/5 rounded bg-gray-200" />

        {/* description */}
        <div className="space-y-2">
          <div className="h-4 rounded bg-gray-200" />
          <div className="h-4 rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
        </div>

        {/* tag */}
        <div className="mt-8 h-10 w-56 rounded border border-gray-200 bg-gray-100" />
      </div>
    </article>
  );
}