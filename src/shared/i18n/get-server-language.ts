import { cookies } from "next/headers";
import {
	LANGUAGE_COOKIE_NAME,
	defaultLanguage,
	normalizeLanguage,
} from "./config";

export const getServerLanguage = async () => {
	const cookieStore = await cookies();

	return normalizeLanguage(
		cookieStore.get(LANGUAGE_COOKIE_NAME)?.value ?? defaultLanguage,
	);
};
