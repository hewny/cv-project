import { useState } from "react";

const Education = (props) => {
  const { education } = props;

  return (
    <div>
      {education.map((element, index) => (
        <div key={index}>
          {element.from} {element.to} {element.school} {element.degree}
        </div>
      ))}
    </div>
  );
};

const EducationInput = (props) => {
  const { education, setEducation } = props;
  const [startDate, setStartDate] = useState("text");
  const [endDate, setEndDate] = useState("text");

  const handleChange = (index, e) => {
    let newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
  };

  const addEducationForm = () => {
    let newEducation = [
      ...education,
      { from: "", to: "", school: "", degree: "" },
    ];
    setEducation(newEducation);
  };

  const removeEducationForm = () => {
    let newEducation = [...education];
    newEducation.pop();
    setEducation(newEducation);
  };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(formValues))
  // }

  return (
    <div>
      <form>
        <label>Education:</label>
        {education.map((element, index) => (
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
              name="school"
              value={element.school || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="School"
            />
            <input
              type="text"
              name="degree"
              value={element.degree || ""}
              onChange={(e) => handleChange(index, e)}
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
