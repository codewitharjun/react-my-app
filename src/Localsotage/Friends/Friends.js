import './Friends.css'
import  React, {useEffect ,useState} from 'react';
import Friend from '../Friend/Friend';



function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('./jgenerate15.json')
        .then(res => res.json())
        .then(data => setFriends(data))
    } , [])

    return (
        <div>
            <h1>Top 15 conmpanies</h1>
            <div className= "friends-card">
                {
                    friends.map(friend => <Friend data={friend} key={friend._id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;