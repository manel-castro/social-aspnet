import React, { FunctionComponent, useState } from "react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
interface ActivityListProps {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityList: FunctionComponent<ActivityListProps> = ({
  activities,
  deleteActivity,
  submitting,
}) => {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: React.SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  const { activityStore } = useStore();

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
              <div>
                <button
                  onClick={() => activityStore.selectActivity(activity.id)}
                >
                  View
                </button>
                <button
                  name={activity.id}
                  disabled={submitting && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                >
                  Delete
                </button>
              </div>
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
