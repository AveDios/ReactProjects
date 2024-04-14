import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";
import "./App.css";

const initialPeople = [
  {
    name: "Jan",
    tel: 123456789,
    city: "Krakow",
  },
  {
    name: "Filip",
    tel: 987654321,
    city: "Warsaw",
  },
  {
    name: "Paweł",
    tel: 465739295,
    city: "London",
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);
  const handleShowFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    setPeople([...people, data]);
    setIsFormShown(false);
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.tel}
            name={person.name}
            tel={person.tel}
            city={person.city}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
