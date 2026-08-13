"use client";
import { useEffect, useState } from "react";
import { getDateString } from "@/utils/utils";
import { useT } from "next-i18next/client";
import { Language } from "@/shared/types/language";

type PostDatePropsType = {
	releaseDate: string;
};

const PostDate = ({ releaseDate }: PostDatePropsType) => {
	const [date, setDate] = useState<string | null>(null);
	const { i18n } = useT();
	const currentLanguage = i18n.language as Language;

	useEffect(() => {
		const setPostDate = async () => {
			const dateString = getDateString(releaseDate, currentLanguage);
			setDate(dateString);
		};
		setPostDate();
	}, [releaseDate, currentLanguage]);

	return <p className="post_date">{date}</p>;
};

export default PostDate;
