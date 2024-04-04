import css from "./Feedback.module.css";

export default function Feedback({ value, feedbackAmount, quoteOfPositive }) {
  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {feedbackAmount}</p>
      <p>Positive: {quoteOfPositive}%</p>
    </div>
  );
}
