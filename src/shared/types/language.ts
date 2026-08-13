interface LanguageType {
    id: Language;
    title: string;
    shortTitle: string;
    isDefault?: boolean;
}

export type LanguagesType = LanguageType[]

export type Language = "en" | "ru";