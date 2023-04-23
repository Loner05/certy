import {createStore,applyMiddleware,compose} from 'redux'; 
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';


const store = createStore(
    
    // lo que ponemos dentro del compose lo que nos permite es ver  el store redux desde la extension del navegador
    // thunk es un middleware que permite manejar asincronismo
    rootReducer,
     compose(applyMiddleware(thunk))
    )

    export default store