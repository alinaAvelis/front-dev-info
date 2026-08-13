"use client"
import {
	scriptErrorHandle,
	simbolsErrorHandle,
} from "@/utils/input-validation";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

export default function useValidateInput() {
	const validationErrors = useClientDictionary("validation");
	const validate = (value: string) => {
		const isScriptTag = scriptErrorHandle(value);
		if (isScriptTag) {
			return validationErrors("scriptTag");
		}

		const isSymbols = simbolsErrorHandle(value);
		if (isSymbols) {
			return validationErrors("symbols");
		}

		return false;
	};

    return validate;;
}
