 import { Types } from "../component/types/Types";

const initialState={
    uid:1234,
    name:'Fernando',
    dir:{
        b:123
    }
}

export const authReducer=(state={},action)=>{
switch (action.type) {
    case Types.login:
        return {
            uid:action.payload.uid,
            name:action.payload.displayName
        }
        
        case Types.logout:
            return { }
            
        default:
                return state;
     
       
}
}