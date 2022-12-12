import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { searchTextSelector, todoListSelector } from '../../redux/selector';

export default function TodoList() {
  const [todoName, setTodoName]= useState('');
  const [priority, setPriority]=useState('Medium');
  const dispath = useDispatch();
  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchTextSelector);
  // console.log("tung",todoList)
  // console.log("chan",searchText)
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setTodoName(e.target.value)
  }
  const handlePriorityChange = (value) =>{
    console.log(value)
    setPriority(value)
  }

  const handleAddButtonClick = () => {
    dispath(addTodo({
      name:todoName,
      priority:priority,
      completed:false,
      id:uuidv4()
    }));
    setTodoName('');
    setPriority('Medium')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' /> */}
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
