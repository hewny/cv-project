const Profile = (props) => {
  const {profile} = props

  if (props.flag === true) {
    return <div>Flag is set true</div>;
  } else {
    return (
      <div>
        {profile.name} {profile.title} {profile.email} {profile.phone}
      </div>
    );
  }
};

const ProfileInput = (props) => {
  const { profile, setProfile } = props;

  const handleChange = (e) => {
    let newProfile = {...profile}
    newProfile[e.target.name] = e.target.value
    setProfile(newProfile)
  }

  return (
    <form>
        <label>Personal Profile: </label>
        <input
          type="text"
          value={profile.name}
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Full name"
        />
        <input
          type="text"
          value={profile.title}
          name="title"
          onChange={(e) => handleChange(e)}
          placeholder="Position or title"
        />
        <input
          type="email"
          value={profile.email}
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Email"
        />
        <input
          type="tel"
          value={profile.phone}
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => handleChange(e)}
          placeholder="Phone number"
        />
      </form>
  )
}

export { Profile, ProfileInput };
