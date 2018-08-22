import * as types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

let initialState = Message.MSG_WELCOM;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSGE:
            return action.message;
        default:
            return [...state];
    }
}
export default message;
