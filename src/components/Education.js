import { Component } from "react";

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

class EducationInput extends Component {
  constructor() {
    super();
    this.state = {
      from: { type: "text" },
      to: { type: "text" },
    };
  }

  onFocus = (e) => {
    if (e.target.name === "from") {
      this.setState({ from: { type: "date" } });
    } else {
      this.setState({ to: { type: "date" } });
    }
  };

  onBlur = (e) => {
    if (e.target.name === "from") {
      this.setState({ from: { type: "text" } });
    } else {
      this.setState({ to: { type: "text" } });
    }
  };

  render() {
    const { education, handleEducationChange } = this.props;

    return (
      <form>
        <label>Education: </label>
        <input
          type={this.state.from.type}
          value={education.from}
          name="from"
          onChange={handleEducationChange}
          placeholder="Start date"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <input
          type={this.state.to.type}
          value={education.to}
          name="to"
          onChange={handleEducationChange}
          placeholder="End date"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
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
        <div>
          <button>Add</button>
          <button>Remove</button>
        </div>
      </form>
    );
  }
}

export { Education, EducationInput };
