import Link from "next/link";

const ResourseBlock = ({ title, data }) => {
	return (
		<section>
			<h2 className="heading">{title}</h2>
			<ol>
                {data?.map((item, i) => {
				return (
					<li key={item?.id} className="mt-3">
						<Link
							className="link"
							href={item.href}
							target="_blank"
							rel="noreferrer noopener"
						>
							{item.title}
						</Link>{" "}
						{Boolean(item.text) && <span>{item.text}</span>}
						{item?.type && item?.type !== "others" && (
							<span className="accent_text text-xs uppercase">
								{" "}
								({item?.type})
							</span>
						)}
					</li>
				);
			})}
            </ol>
		</section>
	);
};

export default ResourseBlock;
