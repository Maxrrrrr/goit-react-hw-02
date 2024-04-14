function Feedback({ values, totalFeedback, totalPositive }) {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
    <p>Bad: {values.bad}</p>
          <p>Total Feedbacks: {totalFeedback}</p>
          <p>Total Positive: {totalPositive}%</p>
    </div>
  );
}

export default Feedback;