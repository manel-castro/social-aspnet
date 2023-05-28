import React, { FunctionComponent } from "react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/AcitvityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
interface ActivityDashboardProps {
  activities: Activity[];

  editMode: boolean;

  handleCreateOrEditActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard: FunctionComponent<ActivityDashboardProps> = ({
  activities,

  editMode,

  handleCreateOrEditActivity,
  deleteActivity,
  submitting,
}) => {
  const { activityStore } = useStore();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ActivityList
        activities={activities}
        deleteActivity={deleteActivity}
        submitting={submitting}
      />

      <div>
        {activityStore.selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm
            handleCreateOrEditActivity={handleCreateOrEditActivity}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
};

export default observer(ActivityDashboard);
