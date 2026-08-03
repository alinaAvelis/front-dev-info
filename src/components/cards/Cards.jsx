"use client";
import CategoryLink from "@/components/category-link";
import Link from "next/link";
import useDictionary from "@/shared/i18n/use-dictionary";
import { useSearchValueSelector } from "@/lib/features/search/hooks/use-search-selector";

const Cards = ({
	data,
	to = "posts",
	withCategory = true,
}) => {
	const general = useDictionary("general");
	const isDataExist = data?.length > 0;
	const searchValue = useSearchValueSelector();

	if (searchValue && !isDataExist) {
		return <p className="text-center">{general.noResult}</p>;
	}

	return (
		<ul className={`posts_container grid`}>
			{data?.map((item, i) => {
				return (
					<li
						key={i + "card"}
						className="border border-solid border-zinc-500 rounded-sm p-3 flex flex-col gap-3 "
					>
						<Link
							className="card flex! h-full flex-col justify-between link"
							href={
								item.toOtherPage
									? `${item.slug.current}`
									: `/${to}/${item.slug.current}`
							}
						>
							<span className="flex flex-col gap-3 md:gap-5">
								<span className="card_title bold bold text-xl md:text-2xl font-bold leading-none">
									{item.title}
								</span>

								<span>{item.shortDescription}</span>
							</span>

							{/* {withImage && <span className='w-full '>
                                        {item.mainImage ? (
                                            <Image
                                                className='img'
                                                src={urlFor(
                                                    item.mainImage.asset
                                                ).url()}
                                                alt=''
                                                width={1000}
                                                height={800}
                                            />
                                        ) : (
                                            <span className=' inline-block h-full w-full bg-[#dddde1]'></span>
                                        )}
                                    </span>} */}
						</Link>

						{withCategory && <CategoryLink card={item} />}
					</li>
				);
			})}
		</ul>
	);
};

export default Cards;
