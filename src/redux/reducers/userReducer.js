const INITIAL_STATE={
    isLoading:true,
    userData:{},
    error:undefined
  }
  
  export default function userReducer(state=INITIAL_STATE,action){
    console.log(action.type);
    switch (action.type) {
      case 'FETCH_ATTEMPT':
        return{
          ...state,
          isLoading:true,
        }
        break;
      case 'FETCH_SUCCESS':
        return{
          ...state,
          isLoading:false,
          userData:action.userData,
          error:undefined
        }
        break;
      case 'FETCH_FAILED':
        return{
          ...state,
          isLoading:false,
          error:action.error
        }
        break;
     
      default:
        return state
    }
  }
  