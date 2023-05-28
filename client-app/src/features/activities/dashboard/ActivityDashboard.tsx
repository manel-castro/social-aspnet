import React, { FunctionComponent } from "react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/AcitvityDetails";
import ActivityForm from "../form/ActivityForm";
interface ActivityDashboardProps {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  handleCreateOrEditActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard: FunctionComponent<ActivityDashboardProps> = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  handleCreateOrEditActivity,
  deleteActivity,
  submitting,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ActivityList
        activities={activities}
        selectActivity={selectActivity}
        deleteActivity={deleteActivity}
        submitting={submitting}
      />

      <div>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            handleCreateOrEditActivity={handleCreateOrEditActivity}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityDashboard;
