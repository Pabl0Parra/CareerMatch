import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CandidateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Work experience"
          value={experience}
          onChangeText={(text) => setExperience(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Skills"
          value={skills}
          onChangeText={(text) => setSkills(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 60,
    padding: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  formContainer: {
    width: "80%",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default CandidateProfile;
