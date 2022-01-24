import { useState } from "react";

const Experience = (props) => {
  const { experience } = props;

  return (
    <div>
      {experience.map((element, index) => (
        <div key={index}>
          {element.from} {element.to} {element.company} {element.position}
        </div>
      ))}
    </div>
  );
};

const ExperienceInput = (props) => {
  const { experience, setExperience } = props
  const [startDate, setStartDate] = useState("text");
  const [endDate, setEndDate] = useState("text");

  const handleChange = (index, e) => {
    let newExperience = [...experience];
    newExperience[index][e.target.name] = e.target.value;
    setExperience(newExperience);
  };

  const addExperienceForm = () => {
    let newExperience = [
      ...experience,
      { from: "", to: "", company: "", position: "" },
    ];
    setExperience(newExperience);
  };

  const removeExperienceForm = () => {
    let newExperience = [...experience];
    newExperience.pop();
    setExperience(newExperience);
  };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(formValues))
  // }

  return (
    <div>
      <form>
        <label>Experience:</label>
        {experience.map((element, index) => (
          <div key={index}>
            <input
              type={startDate}
              name="from"
              value={element.from || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="Start date"
              onFocus={() => setStartDate("date")}
              onBlur={() => setStartDate("text")}
            />
            <input
              type={endDate}
              name="to"
              value={element.to || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="End date"
              onFocus={() => setEndDate("date")}
              onBlur={() => setEndDate("text")}
            />
            <input
              type="text"
              name="company"
              value={element.company || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="Company"
            />
            <input
              type="text"
              name="position"
              value={element.position || ""}
              onChange={(e) => handleChange(index, e)}
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
