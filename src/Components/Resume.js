import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
            <p>
              {work.description1}<br />
              {work.description2}<br />
              {work.description3}<br />
              {work.description4}
            </p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        return <li key={skills.name}>
          <strong>{skills.name}</strong>: <span className="years">{skills.years} years of exp.</span><br />
          <p className="description">{skills.description}</p>
        </li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Selected Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillmessage}</p>
				<div>
				  <ul className="skills">{skills}</ul>
				</div>
			</div>
      </div>
    </section>
    );
  }
}

export default Resume;
