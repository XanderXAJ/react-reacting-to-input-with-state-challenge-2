import { useState } from "react";

export default function EditProfile() {
  let [firstName, setFirstName] = useState("Jane");
  let [lastName, setLastName] = useState("Jacobs");
  let [editing, setEditing] = useState(true);

  function handleNameChange(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }

  function handleEditButtonPress(e) {
    setEditing(!editing);
  }

  if (editing) {
    return (
      <form>
        <label>
          First name:
          <input
            onChange={handleNameChange(setFirstName)}
            defaultValue={firstName}
          />
        </label>
        <label>
          Last name:
          <input
            onChange={handleNameChange(setLastName)}
            defaultValue={lastName}
          />
        </label>
        <button type="button" onClick={handleEditButtonPress}>
          Save Profile
        </button>
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </form>
    );
  } else {
    return (
      <form>
        <label>
          First name: <b>{firstName}</b>
        </label>
        <label>
          Last name: <b>{lastName}</b>
        </label>
        <button type="button" onClick={handleEditButtonPress}>
          Edit Profile
        </button>
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </form>
    );
  }
}
