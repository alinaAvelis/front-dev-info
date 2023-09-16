/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import "../styles/_global.scss";

const MyApp = ({ categories, Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			{/* <Head>
				<script>window.yaContextCb=window.yaContextCb||[]</script>
				<script
					src="https://yandex.ru/ads/system/context.js"
					async
				></script>
			</Head> */}

			<Component {...pageProps} />
		</Provider>
	);
};

export default MyApp;
