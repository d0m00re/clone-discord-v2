import { ReactElement } from 'react';
import styled from "styled-components";

type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface IFlex {
    flexDirection ?: TFlexDirection;
    gap ?: string;
}
//    ${({ cursor }) => cursor && `cursor : ${cursor};`}

const Flex = styled.div<IFlex>`
    display : flex;
    ${({ flexDirection }) => flexDirection && `flex-direction : ${flexDirection};`};
    ${({ gap }) => gap && `gap : ${gap};`};

`;

export default Flex;