import React from 'react';
import PropTypes from 'prop-types';
 const UserItem = ({user:{login, avatar_url, html_url}})=> {
   //Destructuring
   //  const { login, avatar_url, html_url} = props.user;   
   return (
    <div className = "card text-center">
      <img src={avatar_url} alt="Profile" className="round-image" style={{width:"60px"}} />
      <h3>{login}</h3>
      <button className = "btn">
       <a href={html_url}>Profile</a> 
      </button>
      
     </div>
        )
    }
 UserItem.propTypes = {
   user: PropTypes.object.isRequired
 }
export default UserItem;
