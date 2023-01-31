import React, { useState } from "react";
import { View } from "react-native";
import JobListing from "./JobListing";
import styles from "../../styles";

const JobFinder = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Software Engineer",
      company: "Google",
      companyLogo: "https://via.placeholder.com/150",
      description: "Develop and maintain Google's core products",
    },
    {
      title: "Product Manager",
      company: "Apple",
      companyLogo: "https://via.placeholder.com/150",
      description: "Manage and oversee the development of Apple products",
    },
  ]);

  return (
    <View style={styles.container}>
      {jobs.map((job) => (
        <JobListing key={job.title} job={job} />
      ))}
    </View>
  );
};

export default JobFinder;
