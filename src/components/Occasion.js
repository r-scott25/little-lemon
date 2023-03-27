import "./OccasionStyles.css";

const Occasion = () => {
  return (
    <div className="occasion">
      <label for="occasion">Occasion</label>
      <select name="occasion" id="occasion">
        <option value="select-occasion">Select an Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="engagement">Engagement</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default Occasion;
