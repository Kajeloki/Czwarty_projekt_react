import React, { useState, useRef } from "react"
import styles from './UserForm.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [isValid, setIsValid] = useState(true);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const errorHandler = () => {
        setIsValid(true);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        const enteredData = {
            key: Math.random().toString(),
            enteredName,
            enteredAge
        }
        if (enteredAge.trim().toString().length > 0 && enteredName.trim().length > 0 && enteredAge > 0) {
            props.onAddUser(enteredData);
            nameInputRef.current.value='';
            ageInputRef.current.value='';
        }
        else if (enteredAge.trim().toString().length === 0 && enteredName.trim().length === 0) {
            setEnteredTitle('Brak danych');
            setEnteredMessage('Nie wprowadzono żadnych danych. Wprowadź dane aby dodać użytkownika');
            setIsValid(false);
        } else if (enteredAge.trim().toString().length === 0) {
            setEnteredTitle('Brak danych');
            setEnteredMessage('Nie wprowadzono wieku. Wprowadź wiek aby dodać użytkownika');
            setIsValid(false);
        } else if (enteredName.trim().length === 0) {
            setEnteredTitle('Brak danych');
            setEnteredMessage('Nie wprowadzono imienia. Wprowadź imię aby dodać użytkownika');
            setIsValid(false);
        } else if (enteredAge <= 0) {
            setEnteredTitle('Nieprawidłowe dane');
            setEnteredMessage('Wprowadzono wiek równy lub mniejszy od 0. Wprowadź poprawny wiek');
            setIsValid(false);
        }
    }

    return <Wrapper>
        {!isValid && <ErrorModal title={enteredTitle} message={enteredMessage} onClick={errorHandler} />}
        <Card className={styles.input}>
            <div>
                <form onSubmit={SubmitHandler}>
                    <label >Imię</label>
                    <input type='text' ref={nameInputRef} id='username'></input>
                    <label>Wiek (w latach)</label>
                    <input type='number' ref={ageInputRef}></input>
                    <Button type='submit' className={styles.button}>Dodaj</Button>
                </form>
            </div>
        </Card>
    </Wrapper>


}
export default UserForm;