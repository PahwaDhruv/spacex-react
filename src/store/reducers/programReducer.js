import {IS_LOADING, FETCH_PROGRAMS} from '../actions/ActionCreator';

const initState = {
    programs : [],
    loading : false
}

const programReducer = (state = initState, action) => {
    switch(action.type){
        case IS_LOADING : 
        return {
            ...state,
            loading : true
        }
        case FETCH_PROGRAMS :
            return {
                ...state,
                loading : false,
                programs : action.payload
            }
        default :
            return state
    }
}

export default programReducer;