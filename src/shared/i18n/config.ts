export const LANGUAGE_COOKIE_NAME = "NEXT_LOCALE";

export const languages = [
	{ id: "en", title: "English", shortTitle: "EN", isDefault: true },
	{ id: "ru", title: "Русский", shortTitle: "RU" },
] as const;

export type Language = (typeof languages)[number]["id"];

export const defaultLanguage: Language = "en";

export const isLanguage = (value: unknown): value is Language =>
	typeof value === "string" && languages.some(({ id }) => id === value);

export const normalizeLanguage = (value: unknown): Language =>
	isLanguage(value) ? value : defaultLanguage;
