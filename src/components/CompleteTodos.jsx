import React from "react";

export const CompleteTodos = ({
  index,
  todo,
  onClickBack
}) => {
  return (
    <>
      <div key={index} className="list-row">
        <li>{todo}</li>
        <button onClick={() => onClickBack(index)}>戻す</button>
      </div>
    </>
  );
};
