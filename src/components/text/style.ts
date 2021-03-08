import styled from 'styled-components';

export interface textProps {
    fontWeight?: string,
    fontSize?: string,
    lineHeight?: string,
    width?: string,
    height?: string,
    children?: string,
    cursor?: string,
};


export const P = styled.p<textProps>`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    color: #4B5D68;
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    cursor: ${props => props.cursor}
`;