import {
	scriptErrorHandle,
	simbolsErrorHandle,
} from "@/utils/input-validation";
import useDictionary from "@/shared/i18n/use-dictionary";

export default function useValidateInput() {
	const validationErrors = useDictionary("validation");
	const validate = (value: string) => {
		const isScriptTag = scriptErrorHandle(value);
		if (isScriptTag) {
			return validationErrors.scriptTag;
		}

		const isSymbols = simbolsErrorHandle(value);
		if (isSymbols) {
			return validationErrors.symbols;
		}

		return false;
	};

    return validate;;
}
