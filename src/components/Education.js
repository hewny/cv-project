import { Component, useState } from "react";

class Education extends Component {
  render() {
    const { education } = this.props;

    return (
      <div>
        {education.from} {education.to} {education.school} {education.degree}
      </div>
    );
  }
}

const EducationInput = (props) => {
  const handleEducationChange = props.handleEducationChange;
  const addEducationForm = props.addEducationForm;
  const removeEducationForm = props.removeEducationForm;

  const [startDate, setStartDate] = useState("text");
  const [endDate, setEndDate] = useState("text");

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(formValues))
  // }

  return (
    <div>
      <form>
        <label>Education:</label>
        {props.education.map((element, index) => (
          <div key={index}>
            <input
              type={startDate}
              name="from"
              value={element.from || ""}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Start date"
              onFocus={() => setStartDate("date")}
              onBlur={() => setStartDate("text")}
            />
            <input
              type={endDate}
              name="to"
              value={element.to || ""}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="End date"
              onFocus={() => setEndDate("date")}
              onBlur={() => setEndDate("text")}
            />
            <input
              type="text"
              name="school"
              value={element.school || ""}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="School"
            />
            <input
              type="text"
              name="degree"
              value={element.degree || ""}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Degree"
            />
          </div>
        ))}
      </form>
      <button onClick={addEducationForm}>Add</button>
      <button onClick={removeEducationForm}>Remove</button>
    </div>
  );
};

export { Education, EducationInput };
