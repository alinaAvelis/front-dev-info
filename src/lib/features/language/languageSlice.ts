import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultLanguage, normalizeLanguage } from "@/shared/i18n/config";
import type { Language } from "@/shared/i18n/config";

type LanguageState = {
	language: Language;
};

const initialState: LanguageState = {
	language: defaultLanguage,
};

export const language = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguageState: (state, action: PayloadAction<Language>) => {
			state.language = normalizeLanguage(action.payload);
		},
	},
});

export const { setLanguageState } = language.actions;
export default language.reducer;
