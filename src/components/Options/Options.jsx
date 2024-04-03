import css from "./Options.module.css";

export default function Options({ onUpdate, feedbackAmount, onInit }) {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {feedbackAmount !== 0 && (
        <button onClick={() => onInit()}>Reset</button>
      )}
    </div>
  );
}
