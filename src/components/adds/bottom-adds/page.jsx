"use client";
import Script from "next/script";
import React from "react";

import useDomain from "@/hooks/use-domain/page";

const BottomAdds = () => {
    const { domain } = useDomain();
    console.log(window)

    return (
        <>
            {domain === `www.front-dev-info.ru` && typeof window?.yaContextCb !== "undefined" && (
                <>
                    <div className='banner mt-10'>
                        <div id='yandex_rtb_R-A-2501461-10'></div>

                         <Script
                            id='yandex-ads-10'
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-10",
                                        "renderTo": "yandex_rtb_R-A-2501461-10"
                                    })
                                })
                                `,
                            }}
                            ></Script>
                    </div>
                    <div className='banner'>
                        <div id='yandex_rtb_R-A-2501461-11'></div>
                        <Script
                            id='yandex-ads-11'
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.yaContextCb.push(()=>{
                                    Ya.Context.AdvManager.render({
                                        "blockId": "R-A-2501461-11",
                                        "renderTo": "yandex_rtb_R-A-2501461-11"
                                    })
                                })
                                `,
                            }}
                            ></Script>
                    </div>

                    <div className='banner'>
                        <div id='yandex_rtb_R-A-2501461-2'></div>
                        <Script
                            id='yandex-ads-2'
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-2",
										"renderTo": "yandex_rtb_R-A-2501461-2"
									})
								})
                                `,
                            }}
                            ></Script>

                    </div>

                    <div className='banner'>
                    <div id='yandex_rtb_R-A-2501461-5'></div>
                    <Script
                           id='yandex-ads-5'
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.yaContextCb.push(()=>{
									Ya.Context.AdvManager.render({
										"blockId": "R-A-2501461-5",
										"type": "floorAd",
										"platform": "touch"
									})
								})
                                `,
                            }}
                            ></Script>

                    </div>

                    <div className='banner'>
                        <div id='adfox_169091256339947002'></div>

                        <Script
                           id='yandex-ads-adfox-1'
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.yaContextCb.push(()=>{
                                    Ya.adfoxCode.create({
                                        ownerId: 1464385,
                                        containerId: 'adfox_169091256339947002',
                                        params: {
                                            pp: 'g',
                                            ps: 'grkh',
                                            p2: 'hukd'
                                        }
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

export default BottomAdds;
