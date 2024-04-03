import css from "./Options.module.css";

export default function Options({ value, onUpdate }) {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good: {value.good}</button>
      <button onClick={() => onUpdate("neutral")}>
        Neutral: {value.neutral}
      </button>
      <button onClick={() => onUpdate("bad")}>Bad: {value.bad}</button>
      {/* <button>Reset</button> */}
    </div>
  );
}
