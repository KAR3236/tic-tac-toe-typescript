import PropTypes from "prop-types";
import { setSquaresInterface, setXIsNextInterface } from "../Services/AllInterface";

export default function ResetGame({
  setSquares,
  setXIsNext,
  winner,
  children,
}: Readonly<{
  setSquares: setSquaresInterface;
  setXIsNext: setXIsNextInterface;
  winner: string | null;
  children: React.ReactNode;
}>) {
  function resetGame() {
    setSquares(Array(9).fill(null));
    winner === "X" || winner === null ? setXIsNext(true) : setXIsNext(false);
  }

  return <button onClick={resetGame}>Reset Game</button>;
}

ResetGame.propTypes = {
  setSquares: PropTypes.func.isRequired,
  setXIsNext: PropTypes.func.isRequired,
  winner: PropTypes.any,
  children: PropTypes.node,
};
