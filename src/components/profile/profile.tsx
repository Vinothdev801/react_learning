const theme = {
    backgroundColor: "black",
    color: "blueviolet",
    fontSize: "18px",
    width:"10rem",
}
export const Profile = () => {
    return (
        <h1 style={theme}>
            Test Script...
        </h1>
    );
}

 export const UserProfile = () => {
  return (
    <div className='container'>
      <div className="card1">
        <h2>My Profile</h2><span></span>
        <ul>
          <li><b>Name: </b> Tony</li>
          <li><b>Designation: </b> Business, Scientist </li>
          <li><b>Age: </b>40</li>
          <li><b>Mobile: </b>+91-956789234982</li>
          <li id='lang'><b>Language Known:</b>
              <li>
                <p>Tamil</p>
                <p>English</p>
              </li> 
          </li>
        </ul>
      </div>
    </div>
  )
}
