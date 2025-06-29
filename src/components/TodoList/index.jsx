import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
import { useState } from "react";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
    console.log("Todo Name:", e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
