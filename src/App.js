import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
fetch(`https://randomuser.me/api/?results=1`)
    .then((response)=>response.json())
    .then((data)=>setUser(data))
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first} {user.results[0].name.last}</h2>
      <img height={200} src={user.results[0].picture.large} alt="profile image"/>
<h2>Date of Birth: {user.results[0].dob.date}</h2>
<h2>Phone Number: {user.results[0].phone}</h2>
<h2>Address: {user.results[0].location.street.number} {user.results[0].location.street.name} {user.results[0].location.city} {user.results[0].location.country}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
