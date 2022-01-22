import { Component, useState } from "react";

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div>
        {experience.from} {experience.to} {experience.company}{" "}
        {experience.position}
      </div>
    );
  }
}

const ExperienceInput = (props) => {
  const handleExperienceChange = props.handleExperienceChange;
  const addExperienceForm = props.addExperienceForm;
  const removeExperienceForm = props.removeExperienceForm;

  const [startDate, setStartDate] = useState("text");
  const [endDate, setEndDate] = useState("text");

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(formValues))
  // }

  return (
    <div>
      <form>
        <label>Experience:</label>
        {props.experience.map((element, index) => (
          <div key={index}>
            <input
              type={startDate}
              name="from"
              value={element.from || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Start date"
              onFocus={() => setStartDate("date")}
              onBlur={() => setStartDate("text")}
            />
            <input
              type={endDate}
              name="to"
              value={element.to || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="End date"
              onFocus={() => setEndDate("date")}
              onBlur={() => setEndDate("text")}
            />
            <input
              type="text"
              name="company"
              value={element.company || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Company"
            />
            <input
              type="text"
              name="position"
              value={element.position || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Position"
            />
          </div>
        ))}
      </form>
      <button onClick={addExperienceForm}>Add</button>
      <button onClick={removeExperienceForm}>Remove</button>
    </div>
  );
};

export { Experience, ExperienceInput };
