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
        name: "",
        title: "",
        email: "",
        phone: "",
      },
      education: {
        from: "",
        to: "",
        school: "",
        degree: "",
      },
      experience: [
        {
          from: "",
          to: "",
          company: "",
          position: "",
        },
      ],
      exampleFlag: false,
    };
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.addExperienceForm = this.addExperienceForm.bind(this);
    this.removeExperienceForm = this.removeExperienceForm.bind(this);
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

  handleExperienceChange = (i, e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const p = prevState.experience;
      p[i][name] = value;
      return p;
    });
  };

  addExperienceForm = () => {
    this.setState((prevState) => ({
      experience: [...prevState.experience, { from: "", to: "", company: "", position: "" }]
    }))
  }

  removeExperienceForm = () => {
    let exp = this.state.experience; 
    exp.pop()
    this.setState({experience: exp})
  }

  exampleToggle = () => {
    if (this.state.exampleFlag === false) {
      this.setState({
        profile: {
          name: "John Doe",
          title: "Web Developer",
          email: "john@web.com",
          phone: "123-456-7890",
        },
        education: {
          from: "2020-01-01",
          to: "2021-01-01",
          school: "Odin Project",
          degree: "Javascript",
        },
        experience: [
          {
            from: "2021",
            to: "2022",
            company: "The Odin Company",
            position: "Web Developer",
          },
          {
            from: "1999",
            to: "2000",
            company: "The Odin Bakery",
            position: "Baker",
          },
        ],
        exampleFlag: true,
      });
    } else {
      this.setState({
        profile: {
          name: "",
          title: "",
          email: "",
          phone: "",
        },
        education: {
          from: "",
          to: "",
          school: "",
          degree: "",
        },
        experience: [
          {
            from: "",
            to: "",
            company: "",
            position: "",
          },
        ],
        exampleFlag: false,
      });
    }
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
            addExperienceForm={this.addExperienceForm}
            removeExperienceForm={this.removeExperienceForm}
          />
        </div>
        <div>
          <Header />
          <Profile profile={this.state.profile} flag={false} />
          <Education education={this.state.education} />
          <Experience experience={this.state.experience} />
        </div>
        <button onClick={this.exampleToggle}>
          {this.state.exampleFlag ? "Remove Example" : "Load Example"}
        </button>
      </div>
    );
  }
}

export default App;
