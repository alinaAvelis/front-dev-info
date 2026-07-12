
"use client"
import ResourseBlock from "@/components/resourse-block";
import PostLayout from "@/layouts/post-layout";
import useDictionary from "@/shared/i18n/use-dictionary";
import {useResources} from "./use-resources"

const ResoursesPage = () => {
	const menu = useDictionary("menu");
	const data = useResources()
	return (
		<PostLayout pathArr={[{ name: menu?.resources }]}>
			{data?.map(({ title, data }) => {
				return <ResourseBlock key={title} title={title} data={data} />;
			})}
		</PostLayout>
	);
};




export default ResoursesPage;
