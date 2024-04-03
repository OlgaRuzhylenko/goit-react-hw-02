import css from "./Notification.module.css";

export default function Notification({ feedbackAmount }) {
  return (
    (!feedbackAmount) && (
    <div>
      <p>No feedback yet</p>
    </div>)
  );
}
