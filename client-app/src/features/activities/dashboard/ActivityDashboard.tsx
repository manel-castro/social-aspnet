import { observer } from "mobx-react-lite";
import { FunctionComponent, useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";
interface ActivityDashboardProps {}

const ActivityDashboard: FunctionComponent<ActivityDashboardProps> = ({}) => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size === 0) loadActivities();
  }, [loadActivities]);

  if (activityStore.loadingInitial) return <LoadingComponent />;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ActivityList />

      <div>
        <h2>Activity filters</h2>
      </div>
    </div>
  );
};

export default observer(ActivityDashboard);
