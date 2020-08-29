import React from "react";

const PointsByDay = ({ items, name, setHideData }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.btnClose}>
        <button onClick={() => setHideData(false)}>x</button>
      </div>
      <ol style={styles.ol}>
        {items.map((item) => {
          return (
            <li key={item.day} style={styles.itemli}>
              <span style={styles.spanli}>
                Transition:{"   "}${item.spend}
              </span>
              <span>
                Points:{"   "}
                {item.points}
              </span>
              <span>
                User:{"   "}
                {name}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    margin: "auto",
    top: -200,
    background: "white",
    zIndex: 3,
    maxHeight: 500,
    overflow: "scroll",
  },
  btnClose: {
    left: 280,
    position: "fixed",
  },
  ol: {
    width: "100%",
    height: "100%",
    left: 100,
  },
  itemli: {
    height: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spanli: {
    padding: 10,
    alignText: "left",
    left: 30,
  },
};
export default PointsByDay;
