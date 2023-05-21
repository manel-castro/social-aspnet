import React, { FunctionComponent } from "react";
interface ActivityFormProps {}

const ActivityForm: FunctionComponent<ActivityFormProps> = () => {
  return (
    <form
      style={{
        marginLeft: 20,
        marginTop: 20,
        padding: 20,
        background: "white",
        boxShadow: "1px 1px 3px 2px rgba(135,135,135,0.82)",
        height: "40vh",
      }}
    >
      <Input placeholder="Title" />
      <textarea
        placeholder="Description"
        style={{ width: "100%", padding: 10, resize: "none" }}
      />
      <Input placeholder="Category" />
      <Input placeholder="Date" />
      <Input placeholder="City" />
      <Input placeholder="Venue" />
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  );
};

export const Input = ({ placeholder }: any) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{ width: "100%", padding: 10 }}
    />
  );
};

export default ActivityForm;
