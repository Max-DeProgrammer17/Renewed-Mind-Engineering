
import './index.css'
export default function AppTaskTwo() {
  const user ={
    username: 'Nicolas Hoffman',
    age: 25,
    bio: "Marketing Strategist",
    img: "../src/Task 2/pic.jpg"
  }

 const isAdult = user.age >= 18;
 const ageStatus = isAdult ? 'Adult' : 'Minor';
//  const statusClass = isAdult ?
  return (
<>
<div className="app2">
  <div className={`profile-card ${ageStatus}`}>
    <img src={user.img} alt={user.username}></img>
    <h2>{user.username}</h2>
    <p>{user.bio}</p>
    <p>Age Status: {ageStatus}</p>
    {isAdult && <p>Access Granted</p>}
 </div>
</div>
 
</>
  );
}