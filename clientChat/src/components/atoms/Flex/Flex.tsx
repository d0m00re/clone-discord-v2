import { ReactElement } from 'react';
import styled from "styled-components";

export type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type TJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type TAlignItems = 'strech' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

interface IFlex {
    flexDirection ?: TFlexDirection;
    justifyContent ?: TJustifyContent;
    alignItems ?: TAlignItems;
    gap ?: string;
    backgroundColor ?: string;
    height ?: string;
    width ?: string;

    padding ?: string;
    margin ?: string;
}
//    ${({ cursor }) => cursor && `cursor : ${cursor};`}

const Flex = styled.div<IFlex>`
    display : flex;
    ${({ flexDirection }) => flexDirection && `flex-direction : ${flexDirection};`};
    ${({ justifyContent }) => justifyContent && `justify-content : ${justifyContent};`};
    ${({ alignItems }) => alignItems && `align-items : ${alignItems};`};

    ${({ gap }) => gap && `gap : ${gap};`};
    ${({ backgroundColor }) => backgroundColor && `background-color : ${backgroundColor};`};
    ${({ height }) => height && `height : ${height};`};
    ${({ width }) => width && `width : ${width};`};

    ${({ padding }) => padding && `padding : ${padding};`};
    ${({ margin }) => margin && `margin : ${margin};`};


`;

export default Flex;