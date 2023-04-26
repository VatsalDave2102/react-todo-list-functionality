import PropTypes from "prop-types";
import logo from "/src/assets/Green-circle.ico";
import greyLogo from "/src/assets/Grey-circle.png";
import { Tooltip } from "react-tooltip";

export default function TodoItem({ id, task, isDone, updateStatus }) {
  function handleClick() {
    updateStatus(id, isDone);
  }
  if (isDone) {
    let listStyles = { color: "#909090" };
    return (
      <>
        <div className="item">
          <li
            style={listStyles}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={task.length > 23 ? task : undefined}
          >
            {task}
          </li>

          <input
            type="image"
            src={logo}
            alt=""
            width={30}
            height={30}
            onClick={handleClick}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="item">
          <li
            data-tooltip-id="my-tooltip"
            data-tooltip-content={task.length > 23 ? task : undefined}
          >
            {task}
          </li>

          <input
            type="image"
            src={greyLogo}
            height={30}
            style={{ opacity: 0.7 }}
            onClick={handleClick}
          />
        </div>
        <Tooltip id="my-tooltip" />
      </>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  isDone: PropTypes.bool,
  updateStatus: PropTypes.func,
};
