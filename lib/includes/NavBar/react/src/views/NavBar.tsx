import React from 'react';
import htm from 'htm';


export function templateToReact(templateFn): React.ReactElement {
    const html = htm.bind(React.createElement);

    return function ReactComponent(props): React.ReactElement {
        return templateFn(html, props);
    };
}

export default function Larry(html, { message: string }) {
    return html`
      <div>
        Larry Component - ${message}
      </div>
    `;
}

const LarryComponent = templateToReact(Larry);
