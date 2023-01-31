import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Messages from "../components/Messages";

const EmployerProfile = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [jobListing, setJobListing] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hi, I am interested in the job listing you posted.",
    },
    {
      id: 2,
      sender: "Jane Doe",
      message: "Can we schedule an interview for next week?",
    },
    {
      id: 3,
      sender: "John Doe",
      message: "Sure, I will send you an email with the details.",
    },
    {
      id: 4,
      sender: "Jane Doe",
      message: "Thank you!",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Employer Profile</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Job Listing"
          value={jobListing}
          onChangeText={(text) => setJobListing(text)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Post Job Listing</Text>
        </TouchableOpacity>
      </View>
      <Messages messages={messages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  formContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 20,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EmployerProfile;
