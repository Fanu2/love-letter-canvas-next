"use client";

import { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import Controls from "../components/Controls";
import { palettes } from "../lib/palettes";
import { generateMessage } from "../lib/messages";

export default function Home() {
  const [mode, setMode] = useState<"card" | "letter">("card");
  const [mood, setMood] = useState("romantic");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!text) {
      setText(generateMessage());
    }
  }, [mood]);

  const colors = palettes[mood];

  return (
    <main
      className="page"
      style={{
        background: `linear-gradient(-45deg, ${colors.join(",")})`,
      }}
    >
      <Canvas text={text} mode={mode} fontColor={fontColor} />
      <Controls
        mode={mode}
        setMode={setMode}
        mood={mood}
        setMood={setMood}
        fontColor={fontColor}
        setFontColor={setFontColor}
        text={text}
        setText={setText}
      />
    </main>
  );
}
