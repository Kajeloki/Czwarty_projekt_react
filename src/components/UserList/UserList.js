import User from "./User";

const UserList = (props) =>{
return <div className="users">
    <ul>
    {props.newUserElement.map(guy =>
        
        <User name={guy.enteredName} age={guy.enteredAge} key={guy.key}/>
    )}
    </ul>
   
</div>
}
export default UserList;