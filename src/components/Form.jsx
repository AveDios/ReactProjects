import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  const [telValid, setTelValid] = useState(true); // Dodajemy stan do przechowywania informacji o poprawności numeru telefonu

  const handleTelChange = (e) => {
    const telValue = e.target.value;
    // Sprawdzamy, czy wprowadzony numer telefonu ma dokładnie 9 cyfr
    const isValid = /^\d{9}$/.test(telValue);
    setTel(telValue);
    setTelValid(isValid); // Aktualizujemy stan informujący o poprawności numeru telefonu
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (telValid) {
          onAddPerson({ name, tel, city });
        } else {
          alert("Wprowadź poprawny numer telefonu");
        }
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Imię"
        />
      </div>
      <div>
        <input
          defaultValue={tel}
          onChange={handleTelChange}
          type="tel"
          name="tel"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <button disabled={name.length === 0 || !telValid}>Zapisz</button>
    </form>
  );
};
