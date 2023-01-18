import styled from "styled-components";

interface IImg {
    width ?: string;
    height ?: string;
    borderRadius ?: string;
}

const Img = styled.img<IImg> `
    ${(props) => props.width && `width : ${props.width};`};
    ${(props) => props.height && `height : ${props.height};`};
    ${(props) => props.borderRadius && `border-radius : ${props.borderRadius};`};
`;

export default Img;