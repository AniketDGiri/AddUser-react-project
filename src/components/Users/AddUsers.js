import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import AddUserStyle from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState({});

  const addUserhandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input message",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age above 1",
      });
      return;
    }
    props.getTotalUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { userName: userName, userAge: userAge, id: Math.random().toString() },
      ];
    });

    setUserName("");
    setUserAge("");
  };

  const changeuserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    console.log("In error handler");
    setError({});
  };

  return (
    <div>
      {Object.keys(error).length && (
        <ErrorModal
          title={error.title}
          message={error.message}
          buttonTitle="Cancel"
          onConfirm={errorHandler}
        />
      )}
      <Card addUserStyle={AddUserStyle.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={changeuserNameHandler}
            value={userName}
          />

          <label htmlFor="age">Age (in years):</label>
          <input
            type="Number"
            id="age"
            onChange={changeAgeHandler}
            value={userAge}
          />

          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
