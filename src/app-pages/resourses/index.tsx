
import ResourseBlock from "@/components/resourse-block";
import PostLayout from "@/layouts/post-layout";
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
import { ResourcesFromSanityType } from "@/shared/types/resources";

const ResoursesPage = async ({
	resources,
}: {
	resources: ResourcesFromSanityType;
}) => {
	const text = await getServerDictionary("menu");

	return (
		<PostLayout pathArr={[{ name: text("resources") }]}>
			<h1>{text("resources")}</h1>
			{resources?.map(({ _id, title, body }) => {
				return <ResourseBlock key={_id} title={title} data={body} />;
			})}
		</PostLayout>
	);
};

export default ResoursesPage;
