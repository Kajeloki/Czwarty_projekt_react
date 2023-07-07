import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

const users = [];
function App() {

  const [enteredUser, setEnteredUser] = useState(users);
  console.log(enteredUser);
  const AddUser = (newUser) => {
    // setEnteredUser(prevUser => {
    //   return [newUser, ...enteredUser];
    // })
    setEnteredUser([...enteredUser,newUser]);
    
  };
  return (
    <>
      <UserForm onAddUser={AddUser} />
      <UserList newUserElement={enteredUser} />
    </>
  );
}

export default App;
