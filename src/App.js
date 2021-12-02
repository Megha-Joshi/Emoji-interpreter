import React, { useState } from "react";
import "./styles.css";

var emoDict = {
  "😉": "Winking",
  "😊": "Smiley",
  "😂": "Laughing",
  "😏": "Smirking",
  "😁": "Happy",
  "😢": "Teary",
  "😒": "Annoyed",
  "😮": "Shocked",
  "😌": "Calm",
  "😈": "Devil",
  "😇": "Angel",
  "😤": "Angry",
  "😭": "Crying",
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Fries",
  "🍩": "Donut",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍨": "Icecreme",
  "🍸": "Cocktail",
  "🍎": "Apple",
  "🍒": "Cherry"
};

var emojis = Object.keys(emoDict);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInput(event) {
    var userInput = event.target.value;
    var meaning = emoDict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our dictonary!";
    }
    setMeaning(meaning);
  }
  function emojiClick(emoji) {
    var meaning = emoDict[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInput} />

      <h2> {meaning} </h2>

      <h3>Emojis we know </h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
