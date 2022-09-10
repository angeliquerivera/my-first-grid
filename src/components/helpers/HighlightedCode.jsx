import Highlight, { defaultProps } from "prism-react-renderer";

export default function HighlightedCode({ exampleCode, codeLang, codeLabel }) {
  return (
    <article className="single-code-block">
      <header className="example-code-label">
        <p>{codeLabel}</p>
      </header>
      <Highlight {...defaultProps} code={exampleCode} language={codeLang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} example-code`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </article>
  );
}
