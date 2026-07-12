import { useAppSelector } from "@/lib/hooks";
export function useSearchValueSelector() {
    const value = useAppSelector(
        (state) => state.searchReducer.value,
    );

    return value
}
