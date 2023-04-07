
import { USER_LOGIN } from "../actions"



const initialState = {
userLogin: "", 
}




export default function rootReducer(state= initialState, action){

switch(action.type){

case USER_LOGIN:{
return {
...state,
userLogin: action.payload


}

}


default: return{...state}


}


}