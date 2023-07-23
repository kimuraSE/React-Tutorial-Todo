import React from "react";

export const InputTodo = ({todoText,onChangeTodoText,onClickAdd}) => {
  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
};
