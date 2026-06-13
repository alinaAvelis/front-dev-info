"use client";

import { SanityCategoriesType } from "@/types/categories";
import { useEffect } from "react";

import { setCategoriesState } from "@/lib/features/categories/categoriesSlice";
import { useAppDispatch } from "@/lib/hooks";
export default function StateLayoutDispatcher({
	categories,
	children,
}: {
	categories: SanityCategoriesType;
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {

        
		if (categories.length) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	return <>{children}</>;
}
