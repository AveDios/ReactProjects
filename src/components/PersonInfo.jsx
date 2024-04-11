import { Tel } from "./Tel"
export const PersonInfo = (props) => (
    <>
      <h2>Imię: {props.name}</h2>
      <h3>Telefon: <Tel tel={props.tel} /></h3>
      <h3>Miasto: {props.city}</h3>  
    </>
)