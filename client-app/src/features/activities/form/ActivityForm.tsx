import { observer } from "mobx-react-lite";
import {
  ChangeEvent,
  FormEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useStore } from "../../../app/stores/store";
import { useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
interface ActivityFormProps {}

const ActivityForm: FunctionComponent<ActivityFormProps> = ({}) => {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id)
      loadActivity(id)
        .then((activity) => setActivity(activity!))
        .catch((err) => console.log(err));
  }, [id, loadActivity]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        marginLeft: 20,
        // marginTop: 20,
        padding: 20,
        background: "white",
        boxShadow: "1px 1px 3px 2px rgba(135,135,135,0.82)",
        height: "40vh",
      }}
    >
      <Input
        placeholder="Title"
        value={activity.title}
        name="title"
        onChange={handleInputChange}
      />
      <textarea
        placeholder="Description"
        style={{ width: "100%", padding: 10, resize: "none" }}
        value={activity.description}
        name="description"
        onChange={handleInputChange}
      />
      <Input
        placeholder="Category"
        value={activity.category}
        name="category"
        onChange={handleInputChange}
      />
      <Input
        placeholder="Date"
        value={activity.date}
        name="date"
        type="date"
        onChange={handleInputChange}
      />
      <Input
        placeholder="City"
        value={activity.city}
        name="city"
        onChange={handleInputChange}
      />
      <Input
        placeholder="Venue"
        value={activity.venue}
        name="venue"
        onChange={handleInputChange}
      />
      <button disabled={loading}>Submit</button>
      <button>Cancel</button>
    </form>
  );
};

export const Input = ({ placeholder, ...rest }: any) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{ width: "100%", padding: 10 }}
      {...rest}
    />
  );
};

export default observer(ActivityForm);
