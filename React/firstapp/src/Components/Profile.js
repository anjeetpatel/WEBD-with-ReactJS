import Bio from './Bio';
const Profile = (props)=>{
    const {name,age,bio}=props;
    return (
        <div>
            <h1>Profile</h1>
            <h2>Name:{name}</h2>
            <h3>Age:{age}</h3>
            {/* <p>Bio:{bio}</p> */}
            <Bio bio={bio}/>
            </div>
    );
}
export default Profile;