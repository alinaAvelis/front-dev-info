export const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'fr', title: 'French' },
]

export const languageOptions = languages.map(({ id, title }) => ({
  value: id,
  title,
}))

export const defaultLanguage = 'en'
