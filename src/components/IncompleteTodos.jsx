import React from "react";

export const IncompleteTodos = ({ index,todo,onClickCponplete,onClickDelete }) => {
  return (
    <>
      <div key={index} className="list-row">
        <li>{todo}</li>
        <button onClick={() => onClickCponplete(index)}>完了</button>
        <button onClick={() => onClickDelete(index)}>削除</button>
      </div>
    </>
  );
};
