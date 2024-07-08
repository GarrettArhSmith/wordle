import Tile from "./Tile";
import { v4 } from "uuid";

type Props = {
  gameData: {
    board: Array<string>;
    input: Array<string>;
    word: string;
  };
};

const Board = ({ gameData: { word, board, input } }: Props) => {
  const determineMatch = (char: string, i: number) => {
    const j = i - Math.floor(i / 5) * 5;
    if (word[j] === char) return "full";
    if (word.includes(char)) return "char";
    return "none";
  };

  return (
    <div className="w-80 grid grid-cols-5 gap-1 uppercase">
      {board.map((tile, i) => (
        <Tile
          key={v4()}
          dataTileType="board"
          dataMatchType={determineMatch(tile, i)}
        >
          {tile}
        </Tile>
      ))}
      {input.map((tile, i) => (
        <Tile key={v4()} dataTileType="input" dataMatchType="none">
          {tile}
        </Tile>
      ))}
      {Array(30 - (board.length + input.length))
        .fill("")
        .map((tile, i) => (
          <Tile key={v4()} dataTileType="empty" dataMatchType="none">
            {tile}
          </Tile>
        ))}
    </div>
  );
};

export default Board;
