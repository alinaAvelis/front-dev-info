import ResourseBlock from "@/components/resourse-block";
import PostLayout from "@/layouts/post-layout";

const GameDevPage = () => {
    return (
        // <PostLayout pathArr={[{ name: "Game Dev" }]} currentPostSlug="game-dev">
        //     {data?.map(({ title, data }) => {
        //         return <ResourseBlock key={title} title={title} data={data} />;
        //     })}
        // </PostLayout>
        <></>
    );
};





const info = [
    {
        id: 1 + "info",
        href: `https://learn.unity.com/`,
        title: `https://learn.unity.com/`,
        textBeforeStrong: ``,
        strongText: `курсы Unity`,
        textAfterStrong: ``,
    },
     {
        id: 2 + "info",
        href: `https://docs.unity3d.com/ru/530/Manual/index.html`,
        title: `https://docs.unity3d.com/ru/530/Manual/index.html`,
        textBeforeStrong: ``,
        strongText: `документация Unity`,
        textAfterStrong: ``,
    },
];


const data = [
    {
        title: `Ресурсы`,
        data: [
            {
                data: info,
            },
        ],
    },

];
// layout

// {
// 	id: 23,
// 	href: ``,
// 	title: ``,
// 	textBeforeStrong: ``,
// 	strongText: ``,
// 	textAfterStrong: ``,
// },

export default GameDevPage;
