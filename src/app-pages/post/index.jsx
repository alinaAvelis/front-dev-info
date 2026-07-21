"use client";
import Link from "next/link.js";
import parse from "html-react-parser";
import { getDateString } from "@/utils/utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/utils/sanity-utils";
import CodeInput from "@/components/code-input";
import PostLayout from "@/layouts/post-layout";
import useDictionary from "@/shared/i18n/use-dictionary";
import AlgorithmSpeedLineChart from "@/components/line-chart";

const components = {
	block: {
		normal: ({ children }) => <p className="text">{children}</p>,
		h2: ({ children }) => <h2 className="heading">{children}</h2>,
		h3: ({ children }) => <h3 className="heading">{children}</h3>,
		h4: ({ children }) => <h4 className="heading">{children}</h4>,
		h5: ({ children }) => <h5 className="heading">{children}</h5>,
		h6: ({ children }) => <h6 className="heading">{children}</h6>,
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => (
			<ul className="mt-2 list-disc pl-10">{children}</ul>
		),
		number: ({ children }) => <ol className="mt-2">{children}</ol>,

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }) => <ol className="mt-2">{children}</ol>,
	},
	marks: {
		accent_text: ({ children }) => (
			<span className="accent_text">{children}</span>
		),
		link: ({ value, children }) => {
			const { blank, href } = value;
			return blank ? (
				<a
					className="link"
					href={href}
					target="_blank"
					rel="noreferrer noopener"
				>
					{children}
				</a>
			) : (
				<a className="link" href={href}>
					{children}
				</a>
			);
		},
		internalLink: ({ value, children }) => {
			const { href } = value;
			return (
				<Link className="link" target="_blank" href={href}>
					{children}
				</Link>
			);
		},
		gitHub_link: ({ value, children }) => {
			const { href } = value;
			return (
				<a
					className="button mt-3! block sm:w-fit"
					href={href}
					target="_blank"
					rel="noreferrer noopener"
				>
					{children}
				</a>
			);
		},
		ancor_link_main: ({ value, children }) => {
			const { name } = value;
			return <span id={name}>{children}</span>;
		},
	},
	types: {
		code_input: ({ value }) => {
			const { language, code, filename } = value;
			return (
				<CodeInput
					language={language}
					code={code}
					filename={filename}
				/>
			);
		},
		code_input_to_page: ({ value }) => {
			const { code } = value;
			const newCode = parse(code);
			return <div className="mt-5">{newCode}</div>;
		},
		one_image: ({ value }) => {
			const { asset, alt, caption } = value;
			return (
				<div className="post_img my-5">
					<Image
						className="img"
						src={urlFor(asset._ref).url()}
						alt={alt}
						width={1000}
						height={1000}
					/>
				</div>
			);
		},
		one_image_vertical: ({ value }) => {
			const { asset, alt, caption } = value;
			return (
				<div className="post_img  post_img--vertical">
					<Image
						className="img"
						src={urlFor(asset._ref).url()}
						alt={alt}
						width={1000}
						height={1000}
					/>
				</div>
			);
		},
		table: ({ value }) => {
			const { rows } = value;
			return (
				<table className="mt-2 table table-auto">
					<thead>
						<tr>
							{rows[0].cells.map((item, i) => (
								<th
									key={i + "th"}
									className="border border-solid border-slate-400 p-2"
								>
									{item}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{rows.map((item, i) => {
							if (i !== 0) {
								return (
									<tr key={item._key}>
										{item.cells.map((item, i) => (
											<td
												key={i + "tr"}
												className="border border-solid border-slate-400 p-2"
											>
												{item}
											</td>
										))}
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			);
		},
		lineChart: ({ value }) => {
			const { id } = value;
			if (id === "algorithm-speed-line-chart") {
				return <AlgorithmSpeedLineChart />;
			}
		},
	},
};

const PostPage = ({ post, allPosts }) => {
	const menu = useDictionary("menu");
	return (
		<PostLayout
			currentPostSlug={post?.slug?.current}
			allPosts={allPosts}
			pathArr={[
				{ name: menu?.posts, url: "/posts" },
				{ name: post?.title },
			]}
		>
			<h1>{post?.title}</h1>

			<p className="post_date">{getDateString(post?.releaseDate)}</p>
			<PortableText value={post?.content} components={components} />
		</PostLayout>
	);
};

export default PostPage;
