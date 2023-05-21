import React, { FunctionComponent } from "react";
import { Activity } from "../../../app/models/activity";
interface ActivityListProps {
  activities: Activity[];
  selectActivity: (id: string) => void;
}

const ActivityList: FunctionComponent<ActivityListProps> = ({
  activities,
  selectActivity,
}) => {
  return (
    <div
      style={{
        maxWidth: 500,
        width: "100%",
        boxShadow: "1px 1px 3px 2px rgba(135,135,135,0.82)",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 1,
      }}
    >
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h4 style={{ marginBottom: 5 }}>{activity.title}</h4>
            <sup style={{ color: "grey" }}>{activity.date}</sup>
            <div style={{ fontSize: "0.90rem", marginBottom: 10 }}>
              <div>{activity.description}</div>
              <div>
                {activity.city}, {activity.venue}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <button onClick={() => selectActivity(activity.id)}>View</button>
              <label
                style={{
                  borderRadius: 5,
                  border: "1px solid lightgrey",
                  padding: "5px",
                  fontSize: "0.8rem",
                }}
              >
                {activity.category}
              </label>
            </div>
            <hr style={{ marginTop: 15, marginBottom: 1 }} />
          </div>
        );
      })}
    </div>
  );
};

export default ActivityList;
