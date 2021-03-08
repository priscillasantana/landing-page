import styled from 'styled-components'

export interface titleProps {
    fontWeight?: string,
    fontSize?: string,
    lineHeight?: string,
    width?: string,
    height?: string,
    children?: string,
};


export const H1 = styled.h1<titleProps> `
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};
    font-size: ${props => props.fontSize};
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: Helvetica;
    font-style: normal;
    color: #212353;
    align-items: center;
`;