import naGuild from "./../../networkAdapter/chat/guild/guild.na";
import * as actionGuild from "./actions.chat";
const populateAll = async (dispatch : any) => {
    naGuild.getAllDump()
    .then(resp => {
        console.log(resp.data);
        dispatch(actionGuild.setAllElem(resp.data.data))
    })
    .catch(err => {
        console.log(err);
    })
}

export default populateAll;