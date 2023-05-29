import React, { FunctionComponent } from "react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/AcitvityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
interface ActivityDashboardProps {}

const ActivityDashboard: FunctionComponent<ActivityDashboardProps> = ({}) => {
  const { activityStore } = useStore();

  const { selectedActivity, editMode } = activityStore;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ActivityList />

      <div>
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </div>
    </div>
  );
};

export default observer(ActivityDashboard);
