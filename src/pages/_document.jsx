import { Html, Head, Main, NextScript } from "next/document";
import sanityClient from "../../public/support-func/sanityClient";

export async function getStaticProps() {
	const categories = await sanityClient.fetch(`*[_type == "categories"]`);

	console.log(categories)
	return {
		props: {
			categories,
		},
		revalidate: 300,
	};
}
export default function Document({categories}) {
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
    			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
    			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
				<meta
					http-equiv="Content-Security-Policy"
					content="script-src 'self' https://yandex.ru https://yandex.ru/ads/system/context.js https://mc.yandex.ru/metrika/watch.js"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
