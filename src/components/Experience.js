import { Component } from "react";

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div>
        {experience.from} {experience.to} {experience.company} {experience.position}
      </div>
    );
  }
}

export default Experience;