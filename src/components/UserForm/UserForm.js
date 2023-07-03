import React, {useState} from "react"
import './UserForm.css';

const UserForm = (props) =>{
    const [enteredName, setEnteredName]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const id=Math.random().toString();

const NameChangeHandler = (event) =>
{
    setEnteredName(event.target.value);
}

const AgeChangeHandler = (event) =>
{
    setEnteredAge(event.target.value);
}

const enteredData={
    key: Math.random().toString() ,
    enteredName,
    enteredAge
}
const SubmitHandler = (event) =>{
event.preventDefault();
//console.log(enteredData);
props.onAddUser(enteredData);
//console.log(enteredData);
setEnteredName('');
setEnteredAge('');
}

return <div>
    <form className="input">
        <label>Imię</label>
        <input type='text' onChange={NameChangeHandler} value={enteredName}></input>
        <label>Wiek (w latach)</label>
        <input type='number' onChange={AgeChangeHandler} value={enteredAge}></input>
        <button type='submit' onClick={SubmitHandler} className="button">Dodaj</button>
    </form>
</div>
}
export default UserForm;