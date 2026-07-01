export const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'ru', title: 'Russian' },
]

export const languageOptions = languages.map(({ id, title }) => ({
  value: id,
  title,
}))

export const defaultLanguage = 'en'
