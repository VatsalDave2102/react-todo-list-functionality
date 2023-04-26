import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react";

export default function AddInput({getNewTodo}) {
  const [hideBtn, setHideBtn] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const inputBtnRef = useRef();
  const inputFieldRef = useRef();

  // changing state of input button
  function toggleBtn() {
    setHideBtn(true);
  }

  // function to show input field and hide button
  function showInput() {
    inputBtnRef.current.classList.remove("visible");
    inputBtnRef.current.classList.add("hidden");
    inputFieldRef.current.classList.remove("hidden");
    inputFieldRef.current.classList.add("visible");
    inputFieldRef.current.focus()
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
        inputFieldRef.current.classList.remove("visible");
        inputFieldRef.current.classList.add("hidden");
        console.log("escaped");
        setNewTodo("");
      }
      // if enter key is pressed, pass newTodo to TodoContainer component
      if (event.key == "Enter" && hideBtn) {
        if (newTodo.length == 0) {
          alert("Cannot add empty todo");
        } else {
          getNewTodo(newTodo)
          setNewTodo('')
        }
      }
    }

    // adding eventListener to window
    window.addEventListener("keyup", keyHandler);

    // removing eventListener as cleanup
    return () => {
      window.removeEventListener("keyup", keyHandler);
    };
  });

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
      <input
        className="new-todo hidden"
        type="text"
        ref={inputFieldRef}
        placeholder="Add todo"
        value={newTodo}
        onChange={handleInput}
      />
    </div>
  );
}

AddInput.propTypes = {
  getNewTodo: PropTypes.func
}