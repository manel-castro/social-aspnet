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
}

const ActivityDashboard: FunctionComponent<ActivityDashboardProps> = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ActivityList activities={activities} selectActivity={selectActivity} />

      <div>
        {selectedActivity && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
          />
        )}
        <ActivityForm />
      </div>
    </div>
  );
};

export default ActivityDashboard;
