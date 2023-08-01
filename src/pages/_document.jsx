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
    			<link  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
				<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
				<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"></meta>
				<script>window.yaContextCb = window.yaContextCb || []</script>
				<script src="https://yandex.ru/ads/system/context.js" async></script>

				{/* <meta
					http-equiv="Content-Security-Policy"
					content="script-src 'self' https://yandex.ru https://yandex.ru/ads/system/context.js https://mc.yandex.ru/metrika/watch.js"
				/> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
