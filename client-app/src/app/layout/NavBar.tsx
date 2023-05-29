import React, { FunctionComponent } from "react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">Reactivities</NavLink>
      </div>
      <div
        style={{
          padding: 10,
          margin: 10,
          marginRight: 0,

          borderRight: "1px solid grey",
        }}
      >
        <NavLink to="/activities">Activities</NavLink>
      </div>
      <div
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "yellowgreen",
          borderRadius: 5,
          color: "white",
        }}
      >
        <NavLink to="/createActivity">Create Activity</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
