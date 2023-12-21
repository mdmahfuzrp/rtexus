import { useState } from "react";
import { AddNewToDoIcon, CheckIcon } from "../../assets/icons";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ToDo = () => {
  const [todos, setTodos] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      checked: false,
      createdDate: new Date(),
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      checked: false,
      createdDate: new Date(),
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      checked: false,
      createdDate: new Date(),
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      checked: false,
      createdDate: new Date(),
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { text: newTodo.trim(), checked: false, createdDate: new Date() },
      ]);
      setNewTodo("");
    }
  };

  const handleDeleteSelected = () => {
    const filteredTodos = todos.filter(
      (_, index) => !selectedTodos.includes(index)
    );
    setTodos(filteredTodos);
    setSelectedTodos([]);
    setSelectAll(false);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTodos([]);
    } else {
      const indexes = todos.map((_, index) => index);
      setSelectedTodos(indexes);
    }
    setSelectAll(!selectAll);
  };

  const handleToggleSelect = (index) => {
    const selectedIndex = selectedTodos.indexOf(index);
    let newSelected = [...selectedTodos];

    if (selectedIndex === -1) {
      newSelected = [...newSelected, index];
    } else {
      newSelected.splice(selectedIndex, 1);
    }

    setSelectedTodos(newSelected);
  };

  return (
    <div className="todoList rounded-[8px] text-left p-[15px] medium:pb-0 border">
      <h1 className="text-base font-medium">To-Do List</h1>
      <div className="flex items-start relative w-full gap-4 mt-2">
        <textarea
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className=" h-[76px] medium:h-[70px] w-full text-[14px] focus:outline-none p-[10px] rounded-[8px] todoInputField"
        />
        <Link className="absolute block medium:hidden right-[6px] bottom-[-8px] addTodoBtn ">
          <BsFillPlusCircleFill />
        </Link>
        <button
          className="addButton hidden medium:flex items-center gap-1 w-[88px]"
          onClick={handleAddTodo}
        >
          <span className="mt-[-2px]">
            <CheckIcon />
          </span>{" "}
          Add
        </button>
      </div>
      <div className="flex mt-5 medium:mt-0 items-center w-full gap-4 justify-between">
        <div>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="checkbox checkbox-secondary"
          />

          <label className="ml-[10px] text-[14px]">Select All</label>
        </div>
        <div>
          <button
            className="text-[14px] w-[80px] justify-center addButton flex items-center gap-1"
            onClick={handleDeleteSelected}
          >
            <span className="mt-[-2px]">
              <CheckIcon />
            </span>{" "}
            Done
          </button>
        </div>
      </div>
      <ul className="mt-3 medium:mt-0 max-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col gap-[6px]">
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div className="flex items-center text-[14px]">
              <div>
                <input
                  type="checkbox"
                  checked={selectedTodos.includes(index)}
                  onChange={() => handleToggleSelect(index)}
                  className="checkbox checkbox-secondary"
                />
              </div>
              <span
                className="toto_items"
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <span className="add_date">{`Last Added: ${todo.createdDate.toDateString()}`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
