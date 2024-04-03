import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
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

  return (
    <>
      <Description />
      <Options value={responses} onUpdate={updateFeedback} />
      <Feedback />
    </>
  );
}
