import { useState } from "react";
import Square from "../Components/Square";
import { CalculateWinner } from "../Helpers/CalculateWinner";
import ResetGame from "../Helpers/ResetGame";

export default function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  function handleClick(i: number) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquare: string[] | null[] = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner: string | null = CalculateWinner(squares);
  const nextPlayer: string = xIsNext ? "X" : "O";
  let status: string = winner ? "Winner: " + winner : "Next player: " + nextPlayer;

  return (
    <>
      <div className="status">{status}</div>
      <div className="arrage-square">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <br />
      <ResetGame
        setSquares={setSquares}
        setXIsNext={setXIsNext}
        winner={winner}
      >
        Reset Game
      </ResetGame>
    </>
  );
}
