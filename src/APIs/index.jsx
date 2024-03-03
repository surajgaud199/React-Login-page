 const USERS_KEY = 'users'

 export const userSignup = ({email, password}) => {  
  let users = localStorage.getItem("USERS_KEY") || '[]';
  let isExist = false;
  users = JSON.parse(users);
  isExist = users.find(item => item.email == email) ? true : false;

  if(isExist){
    console.log('Already exist');
    return(
        false
    );
  };
  users.push({email, password});
  localStorage.setItem('users', JSON.stringify(users));
  return(
    true
  ); 
};

export const userLogin = ({email, password}) => {
  let users = localStorage.getItem(USERS_KEY);
  if(users){
    users = JSON.parse(users);
    const user = users.find(item => item.email == email);
    if(user && user.password == password){
      return(
        users
      ) 
    };
    return(
      false
    ); 
  };
  return(
    false
  );
};