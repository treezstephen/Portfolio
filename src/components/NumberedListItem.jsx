import React from 'react';

const NumberedListItem = ({num, text}) => {
    return (
        <div className='numbered-list-item'> 
            <div className="number">{num}</div>
            <div>.&nbsp;</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default NumberedListItem;