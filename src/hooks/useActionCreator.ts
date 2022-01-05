import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { ActionCreators } from "../order/ActionCreators";

export const useActionsCreators = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
