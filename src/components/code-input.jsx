"use client";
import React, { useCallback, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeInput = ({ code, filename, language = "JavaScript" }) => {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(async () => {
        try {
            if(navigator) {
                await navigator?.clipboard
                .writeText(code)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch((err) => console.error(`Error copying text:`, err));
            }
          
        } catch (error) {
            console.error(error.message);
        }
    }, [code]);

    return (
        <div className='code_block'>
            <div className='code_block__lang flex justify-between'>
                <div>
                    <span className='capitalize'>{language}</span>{" "}
                    {filename && <span> | {filename}</span>}
                </div>

                <button
                    className='bg-white font-bold uppercase hover:opacity-80 active:opacity-60'
                    onClick={() => copy()}
                >
                    {copied ? <span className="text-green-500">Copied</span> : <span className="cursor-pointer">Copy</span>}
                </button>
            </div>

            {code && (
                <Highlight
                    theme={themes.dracula}
                    code={code}
                    language={language}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <pre style={style}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    <span className='number'>{i + 1}</span>
                                    {line.map((token, key) => (
                                        <span
                                            key={key}
                                            {...getTokenProps({ token })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            )}
        </div>
    );
};

export default CodeInput;
