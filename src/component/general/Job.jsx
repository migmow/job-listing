import React from "react";
const Job = ({ favHandler, obj }) => {
  return (
    <div className="img_and_jobs_container" key={obj.id}>
      <div className="job_img_container">
        <img className="logo" src={obj.logo} alt="logo" />
      </div>
      <div className="job_info_container">
        <div className="job-title-and-company">
          <div className={obj.featured || obj.new ? "featured_or_new" : null}>
            <span className="company_title">{obj.company}</span>
            {obj.new ? <span className="newJob">New!</span> : null}
            {obj.featured ? (
              <span className="featuredJob">Featured</span>
            ) : null}
          </div>
        </div>
        <h4 className="job_position">{obj.position}</h4>
        <ul className="job_postedAt_information">
          <li className="info_data">{obj.postedAt}</li>
          <span className="info_data"> . </span>
          <p className="info_data"> {obj.contract}</p>
          <span className="info_data"> . </span>
          <p className="info_data"> {obj.location}</p>
        </ul>
      </div>
      <hr></hr>
      <div className="filters_container">
        <span onClick={() => favHandler(obj.role)} value={obj.role}>
          {obj.role}
        </span>
        <span onClick={() => favHandler(obj.level)}> {obj.level}</span>
        {obj.languages.map((item, index) => {
          return (
            <span onClick={() => favHandler(item)} key={index}>
              {item}
            </span>
          );
        })}
        {obj.tools.map((item, index) => {
          return (
            <span onClick={() => favHandler(item)} key={index}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
