import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch13";

const ProjectsCard = () => {
  const [projectsData, setProjectsData] = useState();
  const [showDetails, setShowDetails] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/projects");

      const { status, data } = res;
      if (status === 200) {
        setProjectsData(data.projects);
        console.log(data.projects);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return projectsData ? (
    <div>
      <h1>Projects</h1>
      {projectsData.map((project, index) => {
        const { title, description } = project;
        return (
          <div key={index}>
            <p>
              <b>Name:</b>
              {title} <br />
              <b>Description:</b>
              {description}
            </p>
            <button onClick={() => setShowDetails(project)}>
              Show Details
            </button>
          </div>
        );
      })}

      <div>
        {showDetails && (
          <div>
            <div>
              <h1>Project Details</h1>
              <p>
                <b>Name:</b>
                {showDetails.title} <br />
                <b>Description:</b>
                {showDetails.description}
                <br />
                <b>Technologies: </b> {showDetails.technologies}
                <br />
                <b>Completed: </b> {showDetails.completed.toString()}
              </p>
            </div>

            {console.log(showDetails)}
          </div>
        )}
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default ProjectsCard;
