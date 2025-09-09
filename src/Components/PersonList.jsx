import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import "./PersinList.css";
import User from "./User";

const PersonList = ({ data, deleteUser }) => {
  //Variable

  //State
  const [show, setShow] = useState(true);
  //Function

  //Style
  const myStyle = "text-3xl font-bold text-red-400";

  return (
    <div className="container">
      <div className="header">
        <h1 className={myStyle}>จำนวนประชากร {data.length} คน</h1>
        <span onClick={() => setShow(!show)}>
          {show ? <IoMdEyeOff size={30} /> : <IoEye size={30} />}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
