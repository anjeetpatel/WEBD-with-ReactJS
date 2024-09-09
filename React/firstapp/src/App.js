import Profile from "./Components/Profile";
const App = () => {
  const user={
    namw:"Anjeet",
    age:21,
    bio:"I am a full stack developer"
  }
  return (
    <div>
      <h1>Main Component</h1>
      <Profile name={user.name} age={user.age} bio={user.bio}/>
    </div>
  );
}
export default  App;