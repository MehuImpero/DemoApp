

export function isLoading(data){
    return{
      type:'FETCH_ATTEMPT',
      isLoading:data
    }
  }


  export function userSuccess(data){
    return{
      type:'FETCH_SUCCESS',
      userData:data
    }
  }
  
  export function userFailed(err){
    return{
      type:'FETCH_FAILED',
      error:err
    }
  }

export function userFunction(data){

  console.log("page No ==",data);

    return dispatch => {

        dispatch(isLoading(true));



        return fetch('https://reqres.in/api/users?page='+data.page ,{
            method:'get',
            headers:{
              'Content-Type':'application/json'
            },
           
          })
      
          .then((response) => {
            if(response.status < 300){
              dispatch(isLoading(false))
              response.json().then((responseJSON) => {
              
               // console.log("responseJSON===",responseJSON);

                
                dispatch(userSuccess(responseJSON))
                
              })
            }
            else{
              response.json().then((responseJSON) => {
               // console.log("responseJSON***",responseJSON);
                dispatch(isLoading(false))
                dispatch(userFailed(responseJSON.message))
              })
            }
          })
      
          .catch((error) => {
           // console.log("error",error);
            dispatch(isLoading(false))
            dispatch(userFailed(error))
          })
      


    }


}