import "./SeatingStyles.css";

const Seating = () => {
  return (
    <>
    <div className="seating-radio-buttons">
      <label>Seating</label>
      <input type="radio" name="seating" id="indoor" value="indoor" />
      <label for="indoor">Indoor</label>

      <input type="radio" name="seating" id="outdoor" value="outdoor" />
      <label for="outdoor">Outdoor</label>
    </div>
    </>
  );
};

export default Seating;
