import { Component } from "react";

export default class ProfileInput extends Component {
  render() {
    const { profile, handleProfileChange } = this.props;
    return (
      <form>
        <label>Personal Profile: </label>
        <input
          type="text"
          value={profile.name}
          name="name"
          onChange={handleProfileChange}
          placeholder="Full name"
        />
        <input
          type="text"
          value={profile.title}
          name="title"
          onChange={handleProfileChange}
          placeholder="Position or title"
        />
        <input
          type="email"
          value={profile.email}
          name="email"
          onChange={handleProfileChange}
          placeholder="Email"
        />
        <input
          type="tel"
          value={profile.phone}
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={handleProfileChange}
          placeholder="Phone number"
        />
      </form>
    );
  }
}
