import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent />;

  return (
    <div
      className="App"
      style={{ maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}
    >
      <NavBar />

      <ul>
        <ActivityDashboard />
      </ul>
    </div>
  );
}

export default observer(App);
