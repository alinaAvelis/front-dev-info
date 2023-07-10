// import { useEffect, useState } from "react";
// import Script from "next/script";
// import Head from "next/head";
// import { wrapper } from "../store/store";

// import "../styles/_global.scss";
// import AppHeader from "../components/app-header";
// import { useRouter } from "next/router";
// import Modal from "../components/modal";

// const pathnames = ["/", "/categories", "/all-stories"];

// const App = ({ Component, pageProps }) => {
// 	const [isModalClose, setIsModalClose] = useState(false);
// 	const router = useRouter();

// 	return (
// 		<>
// 			<Head></Head>

// 			<div>
// 				<AppHeader />

// 				<Component {...pageProps} />
// 			</div>
// 		</>
// 	);
// };

// export default wrapper.withRedux(App);

import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import Script from "next/script";
import Head from "next/head";
import "../styles/_global.scss";
import AppHeader from "../components/app-header";
// import { useRouter } from "next/router";
// import Modal from "../components/modal";

const MyApp = ({ categories, Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<Head>
				<script>window.yaContextCb=window.yaContextCb||[]</script>
				<script
					src="https://yandex.ru/ads/system/context.js"
					async
				></script>
			</Head>

			<AppHeader categories={categories} />
			<Component {...pageProps} />

			<div id="yandex_rtb_R-A-2501461-2"></div>
			<Script id="yandex-ads-2">
				{`
								window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-2",
										"renderTo": "yandex_rtb_R-A-2501461-2"
									})
								})
							`}
			</Script>
		</Provider>
	);
};

export default MyApp;
