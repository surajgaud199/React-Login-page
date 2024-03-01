export const userSignup = ({email, password}) => {  
  let users = localStorage.getItem("users") || '[]';
  let isExist = false;
  users = JSON.parse(users);
  isExist = users.find(item => item.email == email) ? true : false;

  if(isExist){
    console.log('Already exist');
    return(
        false
    ) 
  }
  users.push({email, password});
  localStorage.setItem('users', JSON.stringify(users));
  return(
    true
  ) 
}