declare module '*.svg' {
    import React from 'react';

    interface SVGProps {
        className?: string,
        width?: number,
        height?: number,
    }
    
    class SVG extends React.Component<SVGProps> {}

    export default SVG;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.pdf' {
    const value: string;
    export default value;
}

