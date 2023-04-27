import PropTypes from "prop-types";
import logo from "/src/assets/Green-circle.ico";
import greyLogo from "/src/assets/Grey-circle.png";
import { Tooltip } from "react-tooltip";

export default function TodoItem({ id, task, isDone, updateStatus }) {
  function handleClick() {
    updateStatus(id, isDone);
  }

  return (
    <>
      <div className="item" onClick={handleClick}>
        <li
          style={isDone ? { color: "#909090" } : undefined}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={task.length > 23 ? task : undefined}
        >
          {task}
        </li>

        <input
          type="image"
          src={isDone ? logo : greyLogo}
          alt=""
          width={30}
          height={30}
          
        />
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  isDone: PropTypes.bool,
  updateStatus: PropTypes.func,
};
