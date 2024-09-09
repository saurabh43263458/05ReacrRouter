
import React ,{useEffect,useState} from "react";
import './User.css'
function User(){
    const [data,setData] =useState([]);
     useEffect(() =>{
        fetch("https://api.github.com/users/saurabh43263458")
        .then(response=>response.json())
        .then(data =>{
             setData(data);
        })
     },[])
     return(
        <div className="user-main">
            <div className="uaser-main1 user-container">
                <div className="user-img-div">
                <img src={data.avatar_url} alt="" className="user-img"/>
                </div>
                <div className="user-main-detail">
                    <p>Name : {data.name}</p>
                    <p>Followers : {data.followers}</p>
                    <p>Following : {data.following}</p>
                    <p>Repos : {data.public_repos}</p>
                </div>
            </div>
        </div>
     )
}
export default User;