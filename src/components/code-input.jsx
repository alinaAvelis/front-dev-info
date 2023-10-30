import React  from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeInput = ({code, language = "JavaScript"}) => {
	return (
		<div className="code_block">
			<div className="code_block__lang">
				{language}
			</div>

			{code && <Highlight
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
								<span className="number">{i + 1}</span>
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
			</Highlight>}
		</div>
	);
};

export default CodeInput;
