import css from "./Feedback.module.css";

export default function Feedback({ value, feedbackAmount, quoteOfPositive }) {
  const existValue = value.good !== 0 || value.neutral !== 0 || value.bad !== 0;

  return (
    existValue && (
      <div>
        <p>Good: {value.good}</p>
        <p>Neutral: {value.neutral}</p>
        <p>Bad: {value.bad}</p>
        <p>Total: {feedbackAmount}</p>
        <p>Positive: {quoteOfPositive}%</p>
      </div>
    )
  );
}
