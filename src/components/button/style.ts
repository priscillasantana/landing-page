import styled from 'styled-components';

export interface BtnProps {
    background?: string,
    color?: string,
    width?: string,
    boxShadow?: string,
    children?: string,
    icon?: string,
    marginTop?: string,
    marginRight?: string,
    marginLeft?: string,
};


export const BtnStyle = styled.button<BtnProps> `
    background: ${props => props.background};
    color: ${props => props.color};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.width};
    margin-top: ${props => props.marginTop};
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    height: 60px;
    border-radius: 50px;
    border: 0ch;
    cursor: pointer;
`;