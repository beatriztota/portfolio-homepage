import React from 'react';

const List = (props) => {
  const { projects } = props;

  if (!projects) {
    return null;
  }

  return (
    <div className="project-container">
      <h3>Projetos</h3>
      {Array.from(projects.keys()).map((name, index) => (
        <div key={index}>
          <a href={projects.get(name)}>{name}</a>
        </div>
      ))}
    </div>
  );
}

export default List;