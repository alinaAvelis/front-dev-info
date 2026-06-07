"use client";

import { makeStore, AppStore } from "./store";
import { useRef } from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
	//  const storeRef = useRef<AppStore>(undefined)
	const store = makeStore();
	//    useEffect(() => {
	//    if (!storeRef.current) {
	//     // Create the store instance the first time this renders
	//     storeRef.current = makeStore()
	//   }
	// }, []);

	return <Provider store={store}>{children}</Provider>;
}
