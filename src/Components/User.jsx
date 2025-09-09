import males from "../assets/my-account-svgrepo-com.svg";
import Freemales from "../assets/profit-svgrepo-com.svg";

const User = ({ item, deleteUser }) => {
  // variable

  //useState

  //function

  //style

  return (
    <>
      <li
        className="text-2xl font-bold text-violet-400 my-[20px] mx-[5px] px-[20px] py-[10px] flex justify-between items-center shadow-[0px_1px_4px_rgba(0,0,0,0.16)] rounded-sm border-2 border-solid"
        style={{ borderColor: item.gender == "male" ? "green" : "pink" }}
      >
        <img
          src={item.gender == "male" ? males : Freemales}
          className="w-[50px] h-[50px] inline-block"
        />
        <p>{item.name}</p>

        <div className="control">
          <button className="btn-style" onClick={() => deleteUser(item.id)}>
            deleate
          </button>
        </div>
      </li>
    </>
  );
};

export default User;
