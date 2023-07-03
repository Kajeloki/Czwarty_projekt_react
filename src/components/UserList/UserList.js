import User from "./User";
import styles from './UserList.module.css';
import Card from "../UI/Card";

const UserList = (props) =>{
return <Card className={styles.users}>
<div className="users">
    <ul>
    {props.newUserElement.map(guy =>
        
        <User name={guy.enteredName} age={guy.enteredAge} key={guy.key}/>
    )}
    </ul>
   
</div>
</Card>

}
export default UserList;