import PropTypes from "prop-types";
import { onSquareClickInterface } from "../Services/AllInterface";

export default function Square({
  value,
  onSquareClick,
}: Readonly<{ value: string; onSquareClick: onSquareClickInterface }>) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.any.isRequired,
};
