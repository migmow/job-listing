import React, { useEffect, useState } from "react";
import JobListing from "../general/JobListing";
import jobData from "../../data/data.json";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [favFiltered, setFavFiltered] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    jobs.length === 0 && setJobs(jobData);
    setFilteredJobs(jobData);
  }, [jobs.length]);
  useEffect(() => {
    filteredJobsHandler();
  }, [favFiltered]);

  const filteredJobsHandler = () => {
    const jobsCopy = [...jobs];
    favFiltered.length !== 0
      ? setFilteredJobs(
          jobsCopy.filter((obj) => {
            let isAllowed = true;
            for (let item of favFiltered) {
              if (
                !obj.role.includes(item) &&
                !obj.languages.includes(item) &&
                !obj.level.includes(item) &&
                !obj.tools.includes(item)
              ) {
                isAllowed = false;
              }
            }
            return isAllowed ? obj : null;
          })
        )
      : setFilteredJobs(jobs);
  };

  const favHandler = (favWord) => {
    !favFiltered.includes(favWord) &&
      setFavFiltered((prev) => [...prev, favWord]);
  };

  return (
    <JobListing
      favFiltered={favFiltered}
      favHandler={favHandler}
      setFilteredJobs={setFilteredJobs}
      filteredJobs={filteredJobs}
      setFavFiltered={setFavFiltered}
    ></JobListing>
  );
};

export default Jobs;
