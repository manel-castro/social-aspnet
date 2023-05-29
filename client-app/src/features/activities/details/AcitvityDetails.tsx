import { FunctionComponent, useEffect } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";

const ActivityDetails: FunctionComponent = () => {
  const { activityStore } = useStore();

  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <>Loading...</>; // Only for removing errors since its being checked in parent component

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
        <Link to={`/manage/${activity.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/activities`}>
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default observer(ActivityDetails);
