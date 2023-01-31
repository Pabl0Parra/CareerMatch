import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Messages = ({ messages }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageSender}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
      />
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
  message: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 5,
  },
  messageSender: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
});

export default Messages;
