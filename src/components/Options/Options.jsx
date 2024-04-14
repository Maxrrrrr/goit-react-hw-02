import css from './Options.module.css'

function Options({ updateFeedback, totalFeedback, handleReset }) {
  const handleClick = feedbackType => {
    updateFeedback(feedbackType);
  };


//   const handleReset = () => {
//   updateFeedback("good");
//   updateFeedback("neutral");
//   updateFeedback("bad");
// };

return (
    <div className={css.feedbackButtonsList}>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default Options;