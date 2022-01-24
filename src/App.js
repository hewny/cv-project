// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { Profile, ProfileInput } from "./components/Profile";
import { Education, EducationInput } from "./components/Education";
import { Experience, ExperienceInput } from "./components/Experience";

const App = () => {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([
    {
      from: "",
      to: "",
      school: "",
      degree: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      from: "",
      to: "",
      company: "",
      position: "",
    },
  ]);

  const [example, setExample] = useState(false);

  const exampleToggle = () => {
    if (example === false) {
      setProfile({
        name: "John Doe",
        title: "Web Developer",
        email: "john@web.com",
        phone: "123-456-7890",
      });
      setEducation([
        {
          from: "2020-01-01",
          to: "2021-01-01",
          school: "Odin Project",
          degree: "Javascript",
        },
      ])
      setExperience([
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
      ])
      setExample(!example);
    } else {
      setProfile({
        name: "",
        title: "",
        email: "",
        phone: "",
      });
      setEducation([
        {
          from: "",
          to: "",
          school: "",
          degree: "",
        },
      ])
      setExperience([
        {
          from: "",
          to: "",
          company: "",
          position: "",
        },
      ])
      setExample(!example);
    }
  };

  return (
    <div>
      <ProfileInput profile={profile} setProfile={setProfile} />
      <EducationInput education={education} setEducation={setEducation} />
      <ExperienceInput experience={experience} setExperience={setExperience} />
      <Header />
      <Profile profile={profile} />
      <Education education={education} />
      <Experience experience={experience} />
      <button onClick={exampleToggle}>
        {example ? "Remove Example" : "Load Example"}
      </button>
    </div>
  );
};

export default App;
