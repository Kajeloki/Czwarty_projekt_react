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
    setEnteredUser([newUser, ...enteredUser]);
    
  };
  return (
    <div>
      <UserForm onAddUser={AddUser} />
      <UserList newUserElement={enteredUser} />
    </div>
  );
}

export default App;
