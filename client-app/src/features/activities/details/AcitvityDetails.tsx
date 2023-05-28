import { FunctionComponent } from "react";
import { useStore } from "../../../app/stores/store";

const ActivityDetails: FunctionComponent = () => {
  const { activityStore } = useStore();

  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <></>; // Only for removing errors since its being checked in parent component

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
        <button onClick={() => openForm(activity.id)}>Edit</button>
        <button onClick={cancelSelectedActivity}>Cancel</button>
      </div>
    </div>
  );
};

export default ActivityDetails;
