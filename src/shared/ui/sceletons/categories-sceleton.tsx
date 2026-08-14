import Skeleton from "@mui/material/Skeleton";
export default function CategoriesSkeleton() {
	
	return (
		<section className="w-full gap-3 justify-between flex flex-wrap ">
			{Array.from({ length: 12 }).map((_, i) => (
				<Skeleton
					key={i}
					variant="rectangular"
					width="15%"
					height={35}
				/>
			))}
		</section>
	);
}
