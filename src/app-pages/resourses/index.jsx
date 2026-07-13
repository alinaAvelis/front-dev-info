
"use client"
import ResourseBlock from "@/components/resourse-block";
import PostLayout from "@/layouts/post-layout";
import useDictionary from "@/shared/i18n/use-dictionary";
import {useResources} from "./use-resources"

const ResoursesPage = ({resources}) => {
	const menu = useDictionary("menu");
	const data = useResources()
	return (
		<PostLayout pathArr={[{ name: menu?.resources }]}>
			{resources?.map(({ id, title, body }) => {
				return <ResourseBlock key={id} title={title} data={body} />;
			})}
		</PostLayout>
	);
};




export default ResoursesPage;
