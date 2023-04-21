import "./TimeStyles.css";

const Time = () => {
  return (
    <>
    <div className="time">
      <label for="time">Time</label>
      <select name="time" id="time">
        <option value="select-time">Select a Time</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="11:30 AM">11:30 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="12:30 PM">12:30 PM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="1:30 PM">1:30 PM</option>
        <option value="2:00 PM">2:00 PM</option>
        <option value="2:30 PM">2:30 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="3:30 PM">3:30 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="4:30 PM">4:30 PM</option>
        <option value="5:00 PM">5:00 PM</option>
        <option value="5:30 PM">5:30 PM</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="6:30 PM">6:30 PM</option>
        <option value="7:00 PM">7:00 PM</option>
        <option value="7:30 PM">7:30 PM</option>
        <option value="8:00 PM">8:00 PM</option>
        <option value="8:30 PM">8:30 PM</option>
        <option value="9:00 PM">9:00 PM</option>
        <option value="9:30 PM">9:30 PM</option>
      </select>
    </div>
    </>
  );
};

export default Time;
