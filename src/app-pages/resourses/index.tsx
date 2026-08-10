"use client";
import ResourseBlock from "@/components/resourse-block";
import PostLayout from "@/layouts/post-layout";
import useDictionary from "@/shared/i18n/use-dictionary";
import { ResourcesFromSanityType } from "@/shared/types/resources";

const ResoursesPage = ({
	resources,
}: {
	resources: ResourcesFromSanityType;
}) => {
	const menu = useDictionary("menu");

	return (
		<PostLayout pathArr={[{ name: menu?.resources }]}>
			<h1>{menu?.resources}</h1>
			{resources?.map(({ _id, title, body }) => {
				return <ResourseBlock key={_id} title={title} data={body} />;
			})}
		</PostLayout>
	);
};

export default ResoursesPage;
