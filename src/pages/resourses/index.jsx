import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs";
import Head from "next/head";
import Script from "next/script";

const Post = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="container container--center">
				<Head>
					<title>Ресурсы для frontend разработки</title>
					<meta name="keywords" content="программирование, посты, JavaScrip, frontend,ресурсы" />
					<meta
						name="description"
						content="Различные ресурсы, которые помогут вам во frontend разработке"
						key="ogdesc"
					/>
				</Head>
				<Breadcrumbs pathArr={[{ name: "Ресурсы" }]} />
				<div className=" mt-50  flex page_container">
					<div className="post main  main--not_main">
						<h1>Ресурсы для frontend разработки</h1>

						<section>
							<h2>Content Security Policy</h2>
							<p>
								<strong>
									Документация Content Security Policy
								</strong>{" "}
								-{" "}
								<a
									className="link"
									href="https://content-security-policy.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://content-security-policy.com/
								</a>
							</p>
							<p>
								Сгенерировать{" "}
								<strong>sha256 для Inline скриптов</strong> -{" "}
								<a
									className="link"
									href="https://strict-csp-codelab.glitch.me/csp_sha256_util.html"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://strict-csp-codelab.glitch.me/csp_sha256_util.html
								</a>
							</p>
						</section>

						<section>
							<h2>Изображения</h2>
							<p>
								<strong>
									Сжать картинку до меньших размеров
								</strong>{" "}
								(WebP, PNG и JPEG) -{" "}
								<a
									className="link"
									href="https://tinypng.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://tinypng.com/
								</a>
							</p>
							<p>
								<strong>Изменить формат</strong> (В том числе форматировать <strong>в webp</strong> ) -{" "}
								<a
									className="link"
									href="https://squoosh.app/"
									target="_blank"
									rel="noreferrer noopener"
								>
									https://squoosh.app/
								</a>
							</p>
						</section>
					</div>

					{/* Aside */}
					<aside className="aside">
						<div id="yandex_rtb_R-A-2501461-3"></div>
						<Script id="yandex-ads-3" strategy="afterInteractive">
							{`
								window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-3",
										"renderTo": "yandex_rtb_R-A-2501461-3"
									})
								})
							`}
						</Script>
					</aside>
				</div>
			</div>
		</>
	);
};

export default Post;
