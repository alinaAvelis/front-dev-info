import {
	defaultLanguage as sharedDefaultLanguage,
	languages as sharedLanguages,
} from "@/shared/i18n/config";

export const languages = sharedLanguages.map(({ id, title }) => ({
  id,
  title,
  isDefault: id === sharedDefaultLanguage,
}))

export const languageOptions = languages.map(({ id, title }) => ({
  value: id,
  title,
}))

export const defaultLanguage = sharedDefaultLanguage
