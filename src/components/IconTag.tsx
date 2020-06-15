import React, {
    FunctionComponent,
} from 'react';
import { 
    Tag,
} from 'antd';

const TAG_STYLE = {
    height: '2rem',
    width:  '2rem',
};

interface Props {
    Icon: React.ElementType,
}

export const IconTag: FunctionComponent<Props> = (props: Props) => {
    const { Icon } = props;
    
    return (
        <Tag 
            className='icon-tag'
        >
            <div className='aligned'>
                <Icon style = { TAG_STYLE }/>    
            </div>
        </Tag>
    );
};
