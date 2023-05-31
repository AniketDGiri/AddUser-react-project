import Card from "../UI/Card";
import UserListStyle from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card addUserStyle={UserListStyle.users}>
      <ul>
        {props.usersList.map((user) => {
          return (
            <li
              key={user.id}
            >{`${user.userName}  ${user.userAge} (in Years)`}</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
