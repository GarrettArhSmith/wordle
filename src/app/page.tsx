"use client";
import React, { useState, useEffect, useCallback } from "react";
import Board from "@/components/Board";
import Words from "@/app/words.json";
import Keyboard from "@/components/Keyboard";
import determineMatch from "@/app/helperFunctions";

type MatchType = string;

type GameDataType = {
  state: string;
  word: string;
  input: string[];
  board: string[];
  keys: {
    match: MatchType;
    char: string;
  }[];
};

const initGameData = {
  state: "unf",
  word: Words[Math.floor(Math.random() * Words.length)],
  input: [],
  board: [],
  keys: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ].map((char) => ({ match: "" as MatchType, char })),
};

export default function Home() {
  const [gameData, setGameData] = useState<GameDataType>(initGameData);
  const [isMsgShown, setIsMsgShown] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (e: { code: string; key: string; repeat: boolean }) => {
      if (gameData.state !== "unf" || e.repeat) return;
      else if (e.key === "Enter") {
        setGameData((prev) => {
          let newState = "unf";
          if (prev.word === prev.input.join("")) {
            newState = "win";
            setIsMsgShown(true);
          } else if (prev.board.length >= 25) {
            newState = "lose";
            setIsMsgShown(true);
          }
          if (prev.input.length < 5) {
            setIsMsgShown(true);
            setTimeout(() => {
              setIsMsgShown(false);
            }, 1000);
          }
          return {
            ...prev,
            board:
              prev.input.length > 4
                ? prev.board.concat(prev.input)
                : prev.board,
            input: prev.input.length > 4 ? [] : prev.input,
            state: newState,
            keys: prev.keys.map((key) =>
              prev.input.includes(key.char) && prev.input.length > 4
                ? {
                    char: key.char,
                    match:
                      key.match === "full"
                        ? key.match
                        : determineMatch(prev.word, prev.input, key.char),
                  }
                : key
            ),
          };
        });
      } else if (e.key === "Backspace") {
        setGameData((prev) => ({
          ...prev,
          input: prev.input.toSpliced(-1, 1),
        }));
      } else if (e.code.substring(0, 3) === "Key") {
        setGameData((prev) =>
          prev.input.length < 5
            ? { ...prev, input: [...prev.input, e.key] }
            : prev
        );
      }
    },
    [gameData.state]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameData, handleKeyDown]);

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center p-2 justify-between">
      <div className="h-16 flex flex-col items-center">
        <h1 className="font-sans text-2xl font-bold antialiased">
          Wordle Clone
        </h1>
        {isMsgShown && (
          <div className="bg-black text-white p-2 rounded transition">
            {gameData.state === "win" &&
              `You won! You guessed '${gameData.word}' in ${
                gameData.board.length / 5
              } ${gameData.board.length / 5 > 1 ? "tries!" : "try!"}`}
            {gameData.state === "lose" &&
              `Better Luck next time! The word was '${gameData.word}'`}
            {gameData.state === "unf" && "Not enough letters!"}
          </div>
        )}
      </div>
      <Board gameData={gameData} />
      <Keyboard keys={gameData.keys} keyOnClick={handleKeyDown} />
    </main>
  );
}
