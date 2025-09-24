"use client";
import Script from "next/script";
import React from "react";

import useDomain from "@//hooks/use-domain/page";
import useInnerWidth from "@/hooks/use-inner-width/page";

const DesctopAdds = () => {
	const { domain } = useDomain();
	const { innerWidth } = useInnerWidth();

	return (
		<>
			{innerWidth > 1000 &&
				domain === `www.front-dev-info.ru` &&
				typeof window !== "undefined" && (
					<>
						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-3"></div>

							<Script
								id="yandex-ads-3"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-3",
                                        "renderTo": "yandex_rtb_R-A-2501461-3"
                                    })
                                })
                                `,
								}}
							></Script>
						</div>

						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-6"></div>

							<Script
								id="yandex-ads-6"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-6",
                                        "renderTo": "yandex_rtb_R-A-2501461-6"
                                    })
                                })
                                `,
								}}
							></Script>
						</div>

						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-7"></div>
							<Script
								id="yandex-ads-7"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-7",
                                        "renderTo": "yandex_rtb_R-A-2501461-7"
                                    })
                                })
                                `,
								}}
							></Script>
						</div>

						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-8"></div>

							<Script
								id="yandex-ads-8"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-8",
                                        "renderTo": "yandex_rtb_R-A-2501461-8"
                                    })
                                })
                                `,
								}}
							></Script>
						</div>

						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-9"></div>
							<Script
								id="yandex-ads-9"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-9",
                                        "renderTo": "yandex_rtb_R-A-2501461-9"
                                    })
                                })
                                `,
								}}
							></Script>
						</div>

						<div className="banner">
							<div id="yandex_rtb_R-A-2501461-13"></div>
							<Script
								id="yandex-ads-9"
								dangerouslySetInnerHTML={{
									__html: `
                                window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
        "blockId": "R-A-2501461-13",
        "type": "floorAd",
        "platform": "desktop"
    })
})
                                `,
								}}
							></Script>
						</div>
					</>
				)}
		</>
	);
};

export default DesctopAdds;
