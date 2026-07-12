import { useAppSelector } from "@/lib/hooks";

export function useLanguageSelector() {
    const language = useAppSelector(
        (state) => state.languageReducer.language,
    );

    return language
}