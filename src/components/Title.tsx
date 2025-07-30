import {
    FunctionComponent, 
} from 'react';

interface Props {
    text: string;
}

export const Title: FunctionComponent<Props> = (props: Props) => {
    const {
        text,
    } = props;
    
    return (
        <div className='title-wrapper'>
            <div className='title'>
                { text }
            </div>
        </div>
    );
};
