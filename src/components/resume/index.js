import { Container } from '@material-ui/core';
import React from 'react';

import { ResumeLine } from './resumeLine/resumeLine';

export default function Resume(props) {
  return (
    <Container>
      {props.cv.map((job) => (
        <ResumeLine
          jobTitle={job.jobTitle}
          startDate={job.startDate}
          endDate={job.endDate}
          employer={job.employer}
          location={job.location}
          jobSummary={job.jobSummary}
          jobDetails={job.jobRoles}
          techStack={job.jobTechnologies}
        />
      ))}
    </Container>
  );
}
