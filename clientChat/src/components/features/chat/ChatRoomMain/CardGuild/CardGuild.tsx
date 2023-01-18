import Img from "../../../../atoms/Img/Img";
import Flex from "./../../../../atoms/Flex";
import ListRoom from "./../ListRoom";

type Props = {
    name : string;
    uuid : string;
    id : number;
    isSelect : boolean;
    onClick : () => void;
}

const styleCard = {
  unselected : {
    backgroundColor : "white",
    color : "black"
  },
  selected : {
    backgroundColor : "blue",
    color : "white"
  }
}

function CardGuild(props: Props) {
  const style = styleCard[(props.isSelect) ? 'selected' : "unselected"];
  return (
    <Flex>
    <section
      onClick={props.onClick}
      style={{"backgroundColor" : (style.backgroundColor),
              "borderRadius" : "8px"}}
    >
        <p style={{"color" : style.color}} >{props.name}</p>
        <Img
            width="60px"
            height='60px'
            borderRadius='50%'
            src={`https://source.unsplash.com/random/200x200?timestamp=${props.uuid}`}/>
    </section>
    {props.isSelect &&
      <section>
        <ListRoom uuid={props.uuid} id={props.id}/>
      </section>
    }
    </Flex>
  )
}

export default CardGuild;