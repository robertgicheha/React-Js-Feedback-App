import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate Average
  let average = 0;
  if (Array.isArray(feedback) && feedback.length > 0) {
    average =
      feedback.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedback.length;
  }

  console.log(average);
  // let average =
  //   feedback.reduce((acc, cur) => {
  //     return acc + cur.rating;
  //   }, 0) / feedback.length;

  // average = average.toFixed(1).replace(/[.,]0$/, "");
  // console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedbackStats;
