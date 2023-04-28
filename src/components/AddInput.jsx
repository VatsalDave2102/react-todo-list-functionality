import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function AddInput({ getNewTodo }) {
  const [hideBtn, setHideBtn] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const inputBtnRef = useRef();
  const inputContainerRef = useRef();
  const inputFieldRef = useRef();

  // changing state of input button
  function toggleBtn() {
    setHideBtn(true);
  }

  // function to show input field and hide button
  function showInput() {
    inputBtnRef.current.classList.remove("visible");
    inputBtnRef.current.classList.add("hidden");
    inputContainerRef.current.classList.remove("hidden");
    inputContainerRef.current.classList.add("visible");
    inputFieldRef.current.focus();
  }

  // useEffect hook to run when hideBtn changes
  useEffect(() => {
    if (hideBtn) {
      showInput();
    }
  }, [hideBtn]);

  useEffect(() => {
    // function to handle keys pressed
    function keyHandler(event) {
      // if escape key is pressed show input button and empty input field
      if (event.key == "Escape" && hideBtn) {
        setHideBtn(false);
        inputBtnRef.current.classList.remove("hidden");
        inputBtnRef.current.classList.add("visible");
        inputContainerRef.current.classList.remove("visible");
        inputContainerRef.current.classList.add("hidden");
        setNewTodo("");
      }
    }
    // adding eventListener to window
    window.addEventListener("keyup", keyHandler);

    // removing eventListener as cleanup
    return () => {
      window.removeEventListener("keyup", keyHandler);
    };
  },[hideBtn]);

  // function to handle form submission
  function submitHandler(e){
    e.preventDefault()
    if (newTodo.length == 0) {
      // condition for empty todo
      alert("Cannot add empty todo");
    } else if (!newTodo.replace(/\s/g, "").length) {
      // comdition when there are only white spaces
      alert(
        "Task only contains whitespace (ie. spaces, tabs or line breaks)"
      );
      setNewTodo("");
    } else if (newTodo.trim().length > 40) {
      // when max character limit exceeds
      alert("Maximum character limit exceeded");
    } else {
      getNewTodo(newTodo.trim());
      setNewTodo("");
    }
    inputFieldRef.current.focus();
  }

  // function to handle user input and store it in newTodo
  function handleInput(e) {
    let input = e.target.value;
    setNewTodo(input);
  }
  
  return (
    <div className="input-container">
      <button
        className="input-button visible"
        onClick={toggleBtn}
        ref={inputBtnRef}
      >
        <span className="material-symbols-outlined plus">add</span>
      </button>
      <div className="new-todo-container hidden" ref={inputContainerRef}>
        <form action="" className="input-form" onSubmit={submitHandler}>
        <input
          className="new-todo"
          type="text"
          placeholder="Add todo (Max 40 characters)"
          value={newTodo}
          onChange={handleInput}
          ref = {inputFieldRef}
        />
        <button className="submit-btn" type="submit">
          <span className="material-symbols-outlined arrow">arrow_forward</span>
        </button>
        </form>
      </div>
    </div>
  );
}

AddInput.propTypes = {
  getNewTodo: PropTypes.func,
};
