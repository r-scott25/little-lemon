import "./SpecialRequestsStyles.css";

function SpecialRequests() {
  return (
    <>
    <div
      className="special-requests"
      role="group"
      aria-labelledby="special-requests-heading"
    >
      <label for="special-requests">Special Requests</label>
      <div>
        <textarea
          id="special-requests"
          aria-describedby="special-requests-help"
        ></textarea>
        <div id="special-requests-help" className="sr-only">
          Please enter any special requests you have for your reservation in the
          text area above.
        </div>
      </div>
    </div>
    </>
  );
}

export default SpecialRequests;
