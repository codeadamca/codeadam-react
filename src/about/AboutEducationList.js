import React from "react";

import AboutEducationCreditList from './AboutEducationCreditList';

function AboutEducationList(props) {

  const content = props.educations.map((education, index) =>
    <article className="w3-text-dark-gray ca-container-800 ca-margin-medium-vertical" key={index}>
      <img src={education.image} className="w3-image" alt={education.name + " Logo"} />
      <AboutEducationCreditList credits={education.credits}></AboutEducationCreditList>
    </article>
  );

  return (
    <div className="AboutEducationList">
      
      <hr className="ca-hr" />

      <h2 className="w3-text-red w3-center">Education</h2>

      {content}

    </div>
  );
  
}

export default AboutEducationList;
