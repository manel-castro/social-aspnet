import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  }

  function cancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        console.log("res; ", res.data);

        setActivities(res.data);
      });
  }, []);

  return (
    <div
      className="App"
      style={{ maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}
    >
      <NavBar />
      <ul>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={cancelSelectedActivity}
        />
      </ul>
    </div>
  );
}

export default App;
