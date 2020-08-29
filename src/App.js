import React, { useState, useEffect } from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import uuid from "react-uuid";
import AddUser from "./components/userPages/AddUser";
import { generateExpences } from "./util/GenerateExpences";
import PointsByDay from "./components/userPages/PointsByDay";

const usersList = [];

function App() {
  const [hideData, setHideData] = useState(false);
  const [userName, setUserName] = useState("");
  const [users, setUser] = useState([]);
  const [spent, setSpent] = useState([]);

  const addUser = (id, user, day = [], points = 0) => {
    setUser([...users, { id: id, name: user, dayExp: day, points: points }]);
  };
  const onItemClick = (name, obj) => {
    setSpent(obj);
    setUserName(name);
    setHideData(true);
  };
  const defaultUsers = ["Juan Arbildo", "Markus Boston"];
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      const { data, points } = generateExpences();
      let item = {
        id: uuid(),
        name: defaultUsers[i],
        dayExp: data,
        points: points,
      };
      usersList.push(item);
      setUser(usersList);
    }
  }, []);
  return (
    <div>
      <header className="App-header">Rewards Counter</header>
      <div className="content">
        <AddUser addUser={addUser} />
      </div>
      <div className="user-list">
        <ul>
          <li className="column">
            <span>Users</span>
            <span>Points</span>
          </li>
          {users.map((item) => {
            return (
              <li
                key={item.id}
                className="items"
                onClick={() => onItemClick(item.name, item.dayExp)}
              >
                <span>{item.name}</span>
                <span>{item.points}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {hideData && (
          <div>
            {
              <Fade right>
                <PointsByDay
                  items={spent}
                  name={userName}
                  setHideData={setHideData}
                />{" "}
              </Fade>
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
