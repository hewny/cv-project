// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfileInput from "./components/ProfileInput";
import EducationInput from "./components/EducationInput";
import ExperienceInput from "./components/ExperienceInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        name: "John Doe",
        title: "Web Developer",
        email: "john@web.com",
        phone: "123-456-7890",
      },
      education: {
        from: "2020",
        to: "2021",
        school: "Odin Project",
        degree: "Javascript",
      },
      experience: {
        from: "2021",
        to: "2022",
        company: "The Odin Company",
        position: "Web Developer",
      },
    };
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleProfileChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const p = prevState.profile;
      p[name] = value;
      return p;
    });
  };

  handleEducationChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const p = prevState.education;
      p[name] = value;
      return p;
    });
  };

  handleExperienceChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const p = prevState.experience;
      p[name] = value;
      return p;
    });
  };

  render() {
    // console.log(this.state);

    return (
      <div>
        <div>
          <ProfileInput
            profile={this.state.profile}
            handleProfileChange={this.handleProfileChange}
          />
          <EducationInput
            education={this.state.education}
            handleEducationChange={this.handleEducationChange}
          />
          <ExperienceInput
            experience={this.state.experience}
            handleExperienceChange={this.handleExperienceChange}
          />
        </div>
        <div>
          <Header />
          <Profile profile={this.state.profile} flag={false} />
          <Education education={this.state.education} />
          <Experience experience={this.state.experience} />
        </div>
      </div>
    );
  }
}

export default App;
