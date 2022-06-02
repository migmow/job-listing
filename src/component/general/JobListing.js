import React from "react";
import "../../styles/jobListing.css";
import FilterList from "../general/FilterList";
import Job from "./Job";

const JobListing = ({
  filteredJobs,
  favFiltered,
  favHandler,
  setFavFiltered,
}) => {
  return (
    <>
      <FilterList favFiltered={favFiltered} setFavFiltered={setFavFiltered} />
      {filteredJobs.map((obj, index) => {
        return <Job key={index} favHandler={favHandler} obj={obj}></Job>;
      })}
    </>
  );
};

export default JobListing;
