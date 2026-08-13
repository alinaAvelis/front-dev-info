
import getServerDictionary from "@/dictionary/hooks/get-server-dictionary";
import CurrentDate from "@/shared/ui/current-date";
const AppFooter = async () => {
	const general = await getServerDictionary("general");


	return (
		<footer className="mt-10 bg-zinc-300 py-5 text-center">
			<div className="mx-auto flex flex-col md:flex-row w-full max-w-screen-xl items-center justify-between px-5 md:px-10">
				<p>© <CurrentDate/> front-dev-info</p>

				<div className="text-sm w-full md:w-96 text-center md:text-left">
					{general("writeToMe")}{" "}
					<strong>
						<a href="mailto:frontdevinfo@gmail.com">
							frontdevinfo@gmail.com
						</a>
					</strong>
					.
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
