import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const Notifications = () => {
  const [emergencyAlertsEnabled, setEmergencyAlertsEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [importantUpdatesEnabled, setImportantUpdatesEnabled] = useState(true);

  const handleEmergencyAlertsToggle = () => {
    setEmergencyAlertsEnabled((prevValue) => !prevValue);
  };

  const handleRemindersToggle = () => {
    setRemindersEnabled((prevValue) => !prevValue);
  };

  const handleImportantUpdatesToggle = () => {
    setImportantUpdatesEnabled((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Emergency Alerts</Text>
        <Switch
          value={emergencyAlertsEnabled}
          onValueChange={handleEmergencyAlertsToggle}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Reminders</Text>
        <Switch value={remindersEnabled} onValueChange={handleRemindersToggle} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Important Updates</Text>
        <Switch
          value={importantUpdatesEnabled}
          onValueChange={handleImportantUpdatesToggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  settingText: {
    fontSize: 16,
  },
});

export default Notifications;
