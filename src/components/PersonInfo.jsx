import { useState } from "react";
import { Tel } from "./Tel";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Ukryj" : "Pokaż"}
    </button>
  );

  return (
    <>
      <h2>Imię: {props.name}</h2>
      {buttonEl}
      {isExpanded && (
        <>
          <h3>
            Telefon: <Tel tel={props.tel} />
          </h3>
          {props.city !== undefined ? <h3>Miasto: {props.city}</h3> : null}
        </>
      )}
      <hr />
    </>
  );
};
