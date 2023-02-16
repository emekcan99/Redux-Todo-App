import { Button, Card, Col, Popconfirm, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./Form";
import Search from "antd/es/transfer/search";
import "./components.css";
import { deleteTodo } from "../redux/todos/todosSlice";
import { DeleteOutlined } from "@ant-design/icons";

function TodoList() {
  const [search, setSearch] = useState("");

  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  let filtered = items;
  filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(items);
  console.log(search);

  return (
    <Row gutter={15}>
      <Search
        placeholder="search a note"
        onChange={(e) => setSearch(e.target.value)}
      ></Search>
      <TodoForm></TodoForm>
      {filtered.map((item) => (
        <Col span={6} key={item.id}>
          <Card title={item.title} className={item.color} key={item.id}>
            {item.description}
            <Popconfirm
              placement="bottom"
              title="are ypu sure ?"
              onConfirm={() => dispatch(deleteTodo(item.id))}
              okText="yes"
              cancelText="no"
            >
              <Button shape="circle" size="sm" className="delete-button">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TodoList;
