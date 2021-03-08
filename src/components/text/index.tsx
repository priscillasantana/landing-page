import React from 'react';
import { textProps, P } from './style';


const Text = (props: textProps) => {

    return(
        <P width={props.width}
        font-weight={props.fontWeight}
        font-size={props.fontSize}
        line-height={props.lineHeight}
        >
            {props.children}
        </P>
    )
};

export default Text;