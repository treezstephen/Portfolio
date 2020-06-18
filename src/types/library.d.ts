declare module 'react-animated-burgers' {
    import React from 'react';

    interface HamburgerCollapseReverseProps {
        className?   : string,
        isActive?    : boolean,
        toggleButton?: () => {},
    }
    
    class HamburgerCollapseReverse extends React.Component<HamburgerCollapseReverseProps> {}

    export default HamburgerCollapseReverse;
}
