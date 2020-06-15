import React, {
    FunctionComponent, 
    useState,
} from 'react';
import { 
    animated, 
    config,
    useTrail,
}                                      from 'react-spring';
import { HamburgerCollapseReverse }    from 'react-animated-burgers';
import { Link }                        from 'react-router-dom';
import { PRIMARY_TEXT_COLOR }          from '../styles/app';

export const NavBar: FunctionComponent = () => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);

    
    const items = [
        <Link key='home'       to='/'            onClick={() => setIsOpen(false)}>HOME       </Link>,
        <Link key='about'      to='/about'       onClick={() => setIsOpen(false)}>ABOUT       </Link>,
        <Link key='experience' to='/experiences' onClick={() => setIsOpen(false)}>EXPERIENCES </Link>,
        <Link key='projects'   to='/projects'    onClick={() => setIsOpen(false)}>PROJECTS    </Link>,
        <Link key='contact'    to='/contact'     onClick={() => setIsOpen(false)}>CONTACT     </Link>,
    ];
    
    const trail = useTrail(items.length, {
        config,
        from: { 
            height:  0,
            opacity: 0, 
            x:       20, 
        },
        height:  isOpen ? 120 : 0,
        opacity: isOpen ? 1 : 0,
        x:       isOpen ? 0 : 20,
    });
    
    const NavSpacer = () => {
        return (
            <div className='nav-spacer'></div>
        );
    };
    
    return (
        <>
            <div className = 'nav-bar space-between'>
                <div className = 'aligned'>
                    <a className = 'name'>
                        Stephen Cheung
                    </a>
                </div>
                <HamburgerCollapseReverse
                    barColor     = { PRIMARY_TEXT_COLOR }
                    isActive     = { isOpen }
                    toggleButton = { () => setIsOpen(!isOpen) }
                />
            </div>    
            {
                <div className = {`'nav-menu nav-overlay ${isOpen ? 'open' : ''}`}>
                    <div className = 'nav-overlay-links' >
                        {trail.map(({ x, ...rest }, index) => (
                            <animated.div
                                key={index}
                                className="trails-text"
                                style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}
                            >
                                <div>
                                    {items[index]}    
                                </div>
                            </animated.div>
                        ))}    
                    </div>
                </div>
            }
            <NavSpacer />
        </>
    );
};
