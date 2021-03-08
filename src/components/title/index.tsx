import React from 'react';
import { H1, titleProps } from './style';


function Title(props: titleProps) {
    return (
        
        <H1 font-weight={props.fontWeight}
            line-height={props.lineHeight}
            font-size={props.fontSize}
            width={props.width}
            height={props.height}>
            {props.children} 
        </H1>
    
    )
}

export default Title;
