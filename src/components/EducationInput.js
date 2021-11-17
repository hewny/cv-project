import { Component } from "react";

export default class EducationInput extends Component {
  render() {
    const { education, handleEducationChange } = this.props;
    return (
      <form>
        <label>Education: </label>
        <input
          type="text"
          value={education.from}
          name="from"
          onChange={handleEducationChange}
          placeholder="Start date"
        />
        <input
          type="text"
          value={education.to}
          name="to"
          onChange={handleEducationChange}
          placeholder="End date"
        />
        <input
          type="text"
          value={education.school}
          name="school"
          onChange={handleEducationChange}
          placeholder="University name"
        />
        <input
          type="text"
          value={education.degree}
          name="degree"
          onChange={handleEducationChange}
          placeholder="Degree"
        />
      </form>
    );
  }
}