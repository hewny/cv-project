import { Component } from "react";

class Profile extends Component {
  render() {
    const { profile, flag } = this.props;

    if (flag === true) {
      return <div>Flag is set true</div>;
    } else {
      return (
        <div>
          {profile.name} {profile.title} {profile.email} {profile.phone}
        </div>
      );
    }
  }
}

export default Profile;
