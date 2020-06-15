import React, {
    FunctionComponent, 
    useState,
} from 'react';
import { 
    useSpring, 
    animated, 
    config,
    useTrail,
}                                      from 'react-spring';
import { HamburgerCollapseReverse }    from 'react-animated-burgers';
import { Link }                        from 'react-router-dom';
import { PRIMARY_TEXT_COLOR }          from '../styles/app';

export const NavBar: FunctionComponent = () => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const barAnimation = useSpring({
        from: { 
            transform: 'translate3d(0, -10rem, 0)',
        },
        transform: 'translate3d(0, 0, 0)',
    });
    
    const linkAnimation = useSpring({
        config: config.wobbly,
        delay:  800,
        from:   { 
            opacity:   0 ,
            transform: 'translate3d(0, 30px, 0)', 
        },
        to: { 
            opacity:   1, 
            transform: 'translate3d(0, 0, 0)', 
        },
    });
    
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
    
    return (
        <>
            <animated.div 
                className = 'nav-bar space-between'
                style     = { barAnimation }
            >
                <animated.div 
                    className = 'aligned'
                    style     = { linkAnimation } 
                >
                    <a 
                        className = 'name' 
                    >
                        Stephen Cheung
                    </a>
                </animated.div>
                <HamburgerCollapseReverse
                    barColor     = { PRIMARY_TEXT_COLOR }
                    isActive     = { isOpen }
                    toggleButton = { () => setIsOpen(!isOpen) }
                />
            </animated.div>    
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
        </>
    );
};
