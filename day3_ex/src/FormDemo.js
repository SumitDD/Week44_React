import React, { useState } from "react";
const NameForm = () => {
  const initialState = { name: "" };
  const [name, setName] = useState(initialState);

  function handleChange(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setName({ ...name, [id]: value });
  }
  function handleSubmit(event) {
    window.alert(JSON.stringify(name));
    event.preventDefault();
    setName({});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            id="name"
            value={name.name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
