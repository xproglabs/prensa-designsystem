import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const CodeBlock = ({ children }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', fontSize: '15px', overflowY: 'auto' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                const props = getTokenProps({ token, key });
                return (
                  <span key={key} className={props.className} children={props.children} style={{...props.style, margin: 0, padding: 0, border: 'unset', cursor: 'unset'}} />
                )
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

};
export default CodeBlock;