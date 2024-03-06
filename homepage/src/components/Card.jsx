import React from 'react';
import List from './List';

const Card = (props) => {
  const { name, role, imageUrl, linkedinUrl, projects } = props;

  return (
    <>
      <div className="person">
        <div className="profile-container">
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
          <p>{role}</p>
          <a href={linkedinUrl}><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
        <List projects={projects} />
    </>
  );
}

export default Card;
