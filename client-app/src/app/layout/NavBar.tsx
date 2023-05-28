import React, { FunctionComponent } from "react";
import { useStore } from "../stores/store";
interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = ({}) => {
  const { activityStore } = useStore();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRight: "1px solid grey",
        }}
      >
        Reactivities
      </div>
      <div
        style={{
          padding: 10,
          margin: 10,
          marginRight: 0,

          borderRight: "1px solid grey",
        }}
      >
        Activities
      </div>
      <div
        onClick={() => activityStore.openForm()}
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "yellowgreen",
          borderRadius: 5,
          color: "white",
        }}
      >
        Create Activity
      </div>
    </div>
  );
};

export default NavBar;
