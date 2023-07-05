import React, {useState} from "react"
import styles from './UserForm.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) =>{
    const [enteredName, setEnteredName]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const [isValid, setIsValid]=useState(true);
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredMessage, setEnteredMessage]=useState('');
    const id=Math.random().toString();

const errorHandler =()=>{
    setIsValid(true);
}
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
if(enteredAge.trim().toString().length>0 && enteredName.trim().length>0 && enteredAge>0)
{
    props.onAddUser(enteredData);
    
}
else if(enteredAge.trim().toString().length===0 && enteredName.trim().length===0)
{
    setEnteredTitle('Brak danych');
    setEnteredMessage('Nie wprowadzono żadnych danych. Wprowadź dane aby dodać użytkownika');
    setIsValid(false);
} else if(enteredAge.trim().toString().length===0)
{
    setEnteredTitle('Brak danych');
    setEnteredMessage('Nie wprowadzono wieku. Wprowadź wiek aby dodać użytkownika');
    setIsValid(false);
}else if(enteredName.trim().length===0)
{
    setEnteredTitle('Brak danych');
    setEnteredMessage('Nie wprowadzono imienia. Wprowadź imię aby dodać użytkownika');
    setIsValid(false);
}else if(enteredAge<=0)
{
    setEnteredTitle('Nieprawidłowe dane');
    setEnteredMessage('Wprowadzono wiek równy lub mniejszy od 0. Wprowadź poprawny wiek');
    setIsValid(false);
}

//console.log(enteredData);

//console.log(enteredData);
setEnteredName('');
setEnteredAge('');
}

return <Card className={styles.input}>
    {!isValid && <ErrorModal title={enteredTitle} message={enteredMessage} onClick={errorHandler}/>}
    <div>
    <form onSubmit={SubmitHandler}>
        <label >Imię</label>
        <input type='text' onChange={NameChangeHandler} value={enteredName}></input>
        <label>Wiek (w latach)</label>
        <input type='number' onChange={AgeChangeHandler} value={enteredAge}></input>
        <Button type='submit' className={styles.button}>Dodaj</Button>
    </form>
</div>
</Card>

}
export default UserForm;