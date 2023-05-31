import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

function App() {
  const [totalUserList, getTotalUserList] = useState([]);

  return (
    <div>
      <AddUsers getTotalUserList={getTotalUserList} />
      <UserList usersList={totalUserList}></UserList>
    </div>
  );
}

export default App;
