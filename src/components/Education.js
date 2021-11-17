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

export default Education;