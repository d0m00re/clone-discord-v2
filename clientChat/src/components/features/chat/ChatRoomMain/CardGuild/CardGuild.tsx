import Img from "../../../../atoms/Img/Img";
import Flex from "./../../../../atoms/Flex";
import ListRoom from "./../ListRoom";
import styled from "styled-components";

type Props = {
  name: string;
  uuid: string;
  srcImg ?: string;
  id: number;
  isSelect: boolean;
  onClick: () => void;
}

interface ICustomFlex {
  isSelect : boolean;
}

const CustomFlex = styled.section<ICustomFlex>`
  display : flex;
  align-items : center;
  gap : 10px;

  padding : 0 10px 0 0;
  img {
    border-radius : 50%;
    transition: all 200ms ease-in-out;
  }
  div {
    height : 10px;
    width : 5px;
    background-color: white;
    border-radius: 0 50% 50% 0;
    transition: all 200ms ease-in-out;
  }
  &:hover {
    img {
      border-radius: 12px;
    }
    div {
    height : 30%;
    width : 5px;
    background-color: white;
    border-radius: 0 50% 50% 0;
  }
  }
  ${({ isSelect }) => isSelect && `div {height : 100% !important}`};
`;


function CardGuild(props: Props) {
  return (
    <CustomFlex
      onClick={props.onClick}
      isSelect={props.isSelect}
    >
      <div></div>
      <Img 
        width="50px"
        height='50px'
        borderRadius='50%'
        src={props.srcImg ?? `https://source.unsplash.com/random/200x200?timestamp=${props.uuid}`} />
    </CustomFlex>
  )
}
export {CustomFlex};
export default CardGuild;