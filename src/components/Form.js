import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { addNewTodo } from "../redux/todos/todosSlice";

import "./components.css";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function TodoForm() {
  const [color, setColor] = useState("Form-Card");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    setColor(e.target.value);
  };
  const dispatch = useDispatch();

  const data = {
    title: title,
    description: description,
    color: color,
    id: nanoid(),
  };
  const handleSubmit = () => {
    dispatch(addNewTodo(data));
    setTitle("");
    setDescription("");
  };

  return (
    <Form>
      <Card className={color}>
        <Input
          placeholder="add a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <TextArea
          className="Text-area"
          placeholder="enter your note here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextArea>
        <Button className="Form-button" onClick={handleSubmit}>
          Add New todo
        </Button>
        <Button
          shape="circle"
          className="red-button"
          value="red"
          onClick={handleClick}
        ></Button>
        <Button
          shape="circle"
          className="green-button"
          value="green"
          onClick={handleClick}
        ></Button>
        <Button
          shape="circle"
          className="blue-button"
          value="blue"
          onClick={handleClick}
        ></Button>
        <Button
          shape="circle"
          className="yellow-button"
          value="yellow"
          onClick={handleClick}
        ></Button>
      </Card>
    </Form>
  );
}

export default TodoForm;
