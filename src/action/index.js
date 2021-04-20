export const adduser1=(user)=>{
    return{
      type:'USER1',
      payload:user
    };
  };

  export const userlist=(user)=>{
      
    return{
      type:'USERLIST',
      payload:user
    };
  };

  export const adduser2=(user)=>{
    return{
      type:'USER2',
      payload:user
    };
  };

  export const identity=(id)=>{
    return{
      type:'IDENTITY',
      payload:id
    };
  };

  export const messages=(msg)=>{
    return{
      type:'MESSAGES',
      payload:msg
    };
  };
  