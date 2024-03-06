import React from 'react';
import './Home.css';
import Card from './Card';

const Home = () => {
  // Define the information you want to pass as props
  const cardInfoBruno = {
    name: 'Bruno Tota',
    role: 'Desenvolvedor Java | Golang',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQGUyXrIyubPZQ/profile-displayphoto-shrink_800_800/0/1654603723358?e=1715212800&v=beta&t=Fl4XqPsEl3WCLhVV2ugCK3RMGKroC2Vkh-yz2VCVuMU',
    linkedinUrl: 'https://www.linkedin.com/in/bruno-tota-gongora-80b8b8178/?trk=public_profile_browsemap&originalSubdomain=br',
    projects: new Map([
      ["Eccomerce Api em Golang", 'https://eccom-api.tottadev.com.br/swagger/index.html'],
      ["To Do List Api", 'https://todo-api.tottadev.com.br/swagger/index.html#/']
    ])
  };
  

  const cardInfoBianca = {
    name: 'Bianca Tota',
    role: 'Desenvolvedora Front-end',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQELukHVgDpHog/profile-displayphoto-shrink_800_800/0/1689122683644?e=1715212800&v=beta&t=rl7rM4ZOXcUwyHV9PD2Zwc_h1Qrs5adi2_rn7J_emIk',
    linkedinUrl: 'https://www.linkedin.com/in/bianca-tota-gongora-739981160/',
    
  };

  const cardInfoBeatriz = {
    name: 'Beatriz Tota',
    role: 'Desenvolvedora Front-end',
    imageUrl: 'https://www.decortiles.com/upload/produtos/decortiles-natural-branco-br-15,5x15,5cm.jpg',
    linkedinUrl: 'ht',
  };



  return (
    <>
    <div className="card-container">
      <div className="card-wrapper-bianca">
        <Card {...cardInfoBianca} />
      </div>
      <div className="card-wrapper-bruno">
        <Card {...cardInfoBruno} />
      </div>
      <div className="card-wrapper-beatriz">
        <Card {...cardInfoBeatriz} />
      </div>
    </div>
    </>

  );
}

export default Home;
