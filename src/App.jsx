import { PersonInfo } from "./components/PersonInfo";

const people = [
  {
    name: 'Jan',
    tel: 123456789,
    city: 'Krakow',
  },
  {
    name: 'Filip',
    tel: 987654321,
    city: 'Warsaw',
  },
  {
    name: 'Paweł',
    tel: 465739295,
    city: 'London',
  }
];


function App() {
  return (
    <>
      <h1>Lista kontaktów</h1>
      {people.map(person => (
        <PersonInfo
          key={person.tel}
          name={person.name} 
          tel={person.tel} 
          city={person.city} 
        />
      ))}
    </>
  );
};

export default App