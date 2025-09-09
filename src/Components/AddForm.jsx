import "./Addform.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddForm = ({ data, setData }) => {
  // UseState
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  // function
  const saveData = (e) => {
    e.preventDefault();
    // if (!name.trim()) {
    //   alert("กรูณากรอกชื่อประชากร");
    //   return;
    // }
    const person = {
      id: uuidv4(),
      name: name,
      gender: gender,
    };

    setData([...data, person]);
    setName("");
    setGender("male");

    console.log(person);
  };

  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อประชากร</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>male</option>
          <option>female</option>
        </select>
        <button
          type="submit"
          className="btn-save"
          disabled={name.trim() === ""}
        >
          บันทึก
        </button>
      </form>
    </section>
  );
};

export default AddForm;
