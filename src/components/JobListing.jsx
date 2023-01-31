import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const JobListing = ({ job }) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <View style={styles.listingContainer}>
        <Image source={{ uri: job.companyLogo }} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
        {selected && (
          <View style={styles.selectedContainer}>
            <Text style={styles.description}>{job.description}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default JobListing;
