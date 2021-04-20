const initialstate={
    user1:null,
    user2:null,
    userlist:[],
    messages:[],
    identity:""
}

const mainreducer=(state=initialstate,action)=>{
    switch(action.type){
      case "VIEW":
        return state;
    case "USER1":
        return{
            ...state,user1:action.payload
        }
    case "USER2":
        const email1=state.user1.email
        const email2=action.payload.email
         var ans = email1.localeCompare(email2);
             var res = "";
            if (ans == -1) {
                 res = email1+email2
             } else if (ans == 0) {
                 res = email1+email2
             } else {
                 res =email2+email1
             }
        return{
            ...state,user2:action.payload,identity:res
        }
    case "USERLIST":
        return{
            ...state,userlist:action.payload
        }
    case "MESSAGES":
        return{
            ...state,messages:action.payload
        }
      default:
        return state
    }
  }; 

export default mainreducer;
