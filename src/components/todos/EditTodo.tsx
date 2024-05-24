"use client";

import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center ">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="save"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
