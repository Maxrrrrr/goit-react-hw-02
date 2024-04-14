import { useEffect, useState } from "react";
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification'

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-feedbacks");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };
  
  const totalFeedback = values.good + values.neutral + values.bad;
  
  const totalPositive = Math.round(((values.good + values.neutral) / totalFeedback) * 100);
 const handleReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
     <Description />
      <Feedback values={values} totalFeedback={totalFeedback} totalPositive={totalPositive}  />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={handleReset} />
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;