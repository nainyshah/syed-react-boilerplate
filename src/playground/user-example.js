var user = {
  name: "",
  age: 0,
  profession: "Computer Programmer!",
  location: "",
};
function getLocation(location) {
  if (!location) {
    return "";
  }
  return <p>Location : {location}</p>;
}
var template2 = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age >= 1 && <p>Age : {user.age}</p>}
    <p>Profession : {user.profession}</p>
    {getLocation(user.location)}
  </div>
);
