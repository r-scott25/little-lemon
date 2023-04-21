import "./DateStyles.css";

const Date = () => {
  return (
    <>
    <div className="date">
      <label for="date">Date</label>
    <input
      type="date"
      id="date"
      name="date"
      className="form-control"
    ></input>
 </div>
 </>
  );
}

export default Date;