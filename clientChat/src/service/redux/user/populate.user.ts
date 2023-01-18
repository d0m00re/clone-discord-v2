
import ApiUser from "./../../networkAdapter/user/user.na";
import * as actionsUser from './actions.user';
import { AnyAction, Dispatch } from "redux";

const populateUser = async (dispatch: Dispatch<AnyAction>) => {
    try {
        // call me
        let data = await ApiUser.me()
        // update redux user store
        console.log(data.data)
        dispatch(actionsUser.setUser(data.data.data))
    }
    catch (err) {

    }
}

export default populateUser;