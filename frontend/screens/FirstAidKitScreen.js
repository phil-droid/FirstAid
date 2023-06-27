import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FirstAidKitCheckList = () => {
  // Array of items required in a complete First Aid Kit
  const checklistItems = [
    "Adhesive bandages (various sizes)",
    "Antiseptic wipes",
    "Gauze pads",
    "Medical tape",
    "Scissors",
    "Tweezers",
    "Disposable gloves",
    "Antibiotic ointment",
    "Pain relievers",
    "Emergency blanket",
    "CPR mask",
    "Safety pins",
    "Triangular bandage",
    "Emergency contact information",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../src/firstaidkit.png")}
          style={styles.image}
        />
        <Text style={styles.title}>First Aid Kit Checklist</Text>
      </View>
      {checklistItems.map((item, index) => (
        <View style={styles.checklistItem} key={index}>
          <View style={styles.bullet} />
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "green", // Set the desired color for the bullet
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default FirstAidKitCheckList;
