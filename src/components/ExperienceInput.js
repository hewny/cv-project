import { Component } from "react";

export default class ExperienceInput extends Component {
  render() {
    const { experience, handleExperienceChange } = this.props;
    // console.log(experience);
    // console.log(experience.length);

    // const experienceItems = experience.map((exp) => (
    //     <li key={exp.key.toString()}>test</li>
    // ));

    // // console.log(experienceItems);

    return (
      <div>
        <form>
          <label>Experience: </label>
          <input
            type="text"
            value={experience.from}
            name="from"
            onChange={handleExperienceChange}
            placeholder="Start date"
          />
          <input
            type="text"
            value={experience.to}
            name="to"
            onChange={handleExperienceChange}
            placeholder="End date"
          />
          <input
            type="text"
            value={experience.company}
            name="company"
            onChange={handleExperienceChange}
            placeholder="Company name"
          />
          <input
            type="text"
            value={experience.position}
            name="position"
            onChange={handleExperienceChange}
            placeholder="Position"
          />
        </form>
      </div>
    );
  }
}
