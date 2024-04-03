import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

export default function App() {
  const [responses, setResponses] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setResponses({
      ...responses,
      [feedbackType]: responses[feedbackType] + 1,
    });
  };
  
  const initFeedback = () => {
    setResponses({
      ...responses,
      good: 0,
    neutral: 0,
    bad: 0,
    });
  };

  const totalFeedback = responses.good + responses.neutral + responses.bad;
const positiveFeedbackQuota = Math.round((responses.good  / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options value={responses} onUpdate={updateFeedback} feedbackAmount={totalFeedback} onInit={initFeedback}/>
      <Feedback value={responses} feedbackAmount={totalFeedback} quoteOfPositive = {positiveFeedbackQuota}/>
      <Notification feedbackAmount={totalFeedback}/>
    </>
  );
}
