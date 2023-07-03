import React, {useState} from "react"
import styles from './UserForm.module.css';
import Card from "../UI/Card";

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

return <Card className={styles.input}>
    <div>
    <form onSubmit={SubmitHandler}>
        <label >Imię</label>
        <input type='text' onChange={NameChangeHandler} value={enteredName}></input>
        <label>Wiek (w latach)</label>
        <input type='number' onChange={AgeChangeHandler} value={enteredAge}></input>
        <button type='submit' className={styles.button}>Dodaj</button>
    </form>
</div>
</Card>

}
export default UserForm;