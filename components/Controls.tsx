type Props = {
  mode: string;
  setMode: (v: any) => void;
  mood: string;
  setMood: (v: string) => void;
  fontColor: string;
  setFontColor: (v: string) => void;
  text: string;
  setText: (v: string) => void;
};

export default function Controls({
  mode,
  setMode,
  mood,
  setMood,
  fontColor,
  setFontColor,
  text,
  setText,
}: Props) {
  return (
    <div className="controls">
      <select value={mode} onChange={e => setMode(e.target.value)}>
        <option value="card">Love Card</option>
        <option value="letter">Love Letter</option>
      </select>

      <select value={mood} onChange={e => setMood(e.target.value)}>
        {["romantic","sweet","passionate","calm","warm","night","dreamy"].map(m => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <input
        type="color"
        value={fontColor}
        onChange={e => setFontColor(e.target.value)}
      />

      <textarea
        rows={5}
        placeholder="Write or paste your love letter…"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
}
