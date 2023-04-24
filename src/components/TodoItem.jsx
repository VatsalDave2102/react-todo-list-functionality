import PropTypes from "prop-types";
import logo from "/src/assets/Green-circle.ico";
import greyLogo from "/src/assets/Grey-circle.png";
// import doneLogo from '/src/assets/Grey-circle.png'
export default function TodoItem({ task, isDone }) {
  if (isDone) {
    let listStyles = {color : "#cccccc"}
    return (
      <div className="item">
        <li style={listStyles}>{task}</li>
        <input type="image" src={logo} alt="" width={30} height={30} />
      </div>
    );
  } else {
    return (
      <div className="item">
        <li>{task}</li>
         <input type="image" src={greyLogo} height={30} style={{opacity: 0.7}}/>
      </div>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.string,
  isDone: PropTypes.bool,
};
