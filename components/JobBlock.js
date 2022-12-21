import React from "react";

const JobBlock = (props) => {
  return (
    <article>
      <div>
        <h2>{props.jobTitle}</h2>
        <h3>
          <span>{props.employer}</span>
          <span>|</span>
          <span>{props.datesWorked}</span>
        </h3>
      </div>
      <p>{props.description}</p>
      <ul>
        {props.bullets.map((b, index) => {
          return <li key={index}>{b}</li>;
        })}
      </ul>
    </article>
  );
};

export default JobBlock;
