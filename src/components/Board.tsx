import { Input } from "postcss";
import Tile from "./Tile"

type Props = {
  gameData: {
    board: Array<String>;
    input: Array<String>;
    word: String;
  }
}

const Board = ({ gameData: { word, board, input } }: Props) => {
  
  const determineMatch = (char: string, i: Number) => {
    const j = i-(Math.floor(i/5)*5);
    if (word[j] === char) return "index"
    if (word.includes(char)) return "char"
    return "none"
  }

  return (
    <div className='w-80 grid grid-cols-5 gap-1 uppercase'>
      {board.map((tile, i) => (
        <Tile
          key={`tile${Math.floor(Math.random() * 10000 * i)}`}
          dataTileType="board"
          dataMatchType={determineMatch(tile, i)}
        >{tile}</Tile>
      ))}
      {input.map((tile, i) => (
        <Tile
          key={`tile${Math.floor(Math.random() * 10000 * i)}`}
          dataTileType="input"
          dataMatchType="none"
        >{tile}</Tile>
      ))}
      {Array(30 - (board.length + input.length)).fill("").map((tile, i) => (
        <Tile 
          key={`tile${Math.floor(Math.random() * 10000 * i)}`} 
          dataTileType="empty"
          dataMatchType="none"
        >{tile}</Tile>
      ))}
    </div>
  )
}

export default Board