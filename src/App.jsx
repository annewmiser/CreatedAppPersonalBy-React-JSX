import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import PersonList from "./Components/PersonList";
import AddForm from "./Components/AddForm";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

//global

function App() {
  //variable

  //useState
  const [data, setData] = useState([
    { id: uuidv4(), name: "Rungsan", gender: "male" },
    { id: uuidv4(), name: "Num", gender: "female" },
    { id: uuidv4(), name: "Jo", gender: "male" },
    { id: uuidv4(), name: "Ploy", gender: "female" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "Light");

  // useEffect
  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  //function
  const deleteUser = (id) => {
    const result = data.filter((user) => user.id !== id);
    setData(result);
  };

  return (
    <div className={theme}>
      <div className="App">
        <Header title="PersonApp" theme={theme} setTheme={setTheme} />

        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
