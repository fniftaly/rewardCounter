import React, { useState } from "react";
import uuid from "react-uuid";
import { generateExpences } from "../../util/GenerateExpences";

const AddUser = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [userId, setUerId] = useState(uuid());

  const handleUser = (username) => {
    const { data, points } = generateExpences();
    setUerId(uuid());
    addUser(userId, username, data, points);
    setUsername("");
  };

  return (
    <div style={styles.userpage}>
      <div style={styles.div_input}>
        <input
          type="text"
          style={styles.input}
          name=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={styles.div_btn}>
        <button style={styles.button} onClick={() => handleUser(username)}>
          Add user
        </button>
      </div>
    </div>
  );
};
const styles = {
  userpage: {
    marginBottom: 30,
  },
  input: {
    height: 20,
    width: 200,
    padding: 5,
    margin: 10,
  },
  button: {
    width: 100,
    height: 33,
    fontSize: 15,
  },
  div_input: {
    display: "inline-block",
  },
  div_btn: {
    display: "inline-block",
    padding: 3,
  },
};
export default AddUser;
