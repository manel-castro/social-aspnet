import React, { FunctionComponent } from "react";
import { Activity } from "../../../app/models/activity";
interface ActivityDetailsProps {
  activity: Activity;
  cancelSelectActivity: () => void;
}

const ActivityDetails: FunctionComponent<ActivityDetailsProps> = ({
  activity,
  cancelSelectActivity,
}) => {
  return (
    <div
      style={{
        marginLeft: 20,
        background: "white",
        boxShadow: "1px 1px 3px 2px rgba(135,135,135,0.82)",
        height: "40vh",
      }}
    >
      <div>
        <img
          src={`/assets/categoryImages/${activity.category}.jpg`}
          alt="category"
          style={{ height: 200, width: 400, objectFit: "cover" }}
        />
      </div>
      <div>{activity.title}</div>
      <div>{activity.date}</div>
      <div>{activity.description}</div>
      <div>
        <button>Edit</button>
        <button onClick={cancelSelectActivity}>Cancel</button>
      </div>
    </div>
  );
};

export default ActivityDetails;
