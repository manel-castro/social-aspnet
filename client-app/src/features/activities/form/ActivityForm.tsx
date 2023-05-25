import React, {
  ChangeEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from "react";
import { Activity } from "../../../app/models/activity";
interface ActivityFormProps {
  activity: Activity | undefined;
  closeForm: () => void;
  handleCreateOrEditActivity: (activity: Activity) => void;
}

const ActivityForm: FunctionComponent<ActivityFormProps> = ({
  activity: selectedActivity,
  closeForm,
  handleCreateOrEditActivity,
}) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleCreateOrEditActivity(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

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
      <button>Submit</button>
      <button onClick={closeForm}>Cancel</button>
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

export default ActivityForm;
