import React from 'react';
import { BtnStyle, BtnProps } from './style';


const Botao = (props: BtnProps) => {

    return (

        <BtnStyle 
            background={props.background} 
            color={props.color}
            box-shadow={props.boxShadow}
            width={props.width} 
            icon={props.icon}>
            {props.children}
        </BtnStyle>
    )
}

export default Botao;
