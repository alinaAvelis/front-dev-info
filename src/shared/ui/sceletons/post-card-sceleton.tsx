import Skeleton from '@mui/material/Skeleton';

export function PostCardSkeleton() {
  return (
    <div className="border border-solid border-[#dddde1] p-3 flex flex-col gap-3 overflow-hidden">
      {/* title */}
          <Skeleton variant="text" className='text-xl md:text-2xl ' />

        {/* description */}
         <Skeleton variant="rectangular" width="100%" height={140} />

      
    </div>
  );
}