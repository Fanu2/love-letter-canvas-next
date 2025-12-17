type Props = {
  text: string;
  mode: "card" | "letter";
  fontColor: string;
};

export default function Canvas({ text, mode, fontColor }: Props) {
  return (
    <div className={`canvas ${mode}`}>
      <pre style={{ color: fontColor }}>{text}</pre>
    </div>
  );
}
