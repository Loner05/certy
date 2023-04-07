export const USER_LOGIN = "USER_LOGIN"




export const userLogin = (payload) => {

    return  async function (dispatch){
       let checkUser = await axios.get("http://localhost:3001/payload")
       console.log(checkUser.data)
       return dispatch({type: USER_LOGIN, payload: checkUser.data })
    }

}

