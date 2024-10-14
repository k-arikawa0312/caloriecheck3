import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

interface CalorieCheckerTableProps {
  dates: string[];
  timeZones: string[];
  meals: string[][];
}

const MenuTable: React.FC<CalorieCheckerTableProps> = ({
  dates,
  timeZones,
  meals,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, styles.dateCell]}>日付</Text>
          {timeZones.map((timeZone) => (
            <Text key={timeZone} style={[styles.headerCell, styles.mealCell]}>
              {timeZone}
            </Text>
          ))}
        </View>
        {dates.map((date, index) => (
          <View key={`row-${index}`} style={styles.row}>
            <View style={[styles.dateCell, styles.cell]}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            {timeZones.map((timeZone, timeZoneIndex) => (
              <View
                key={`${timeZone}-${index}`}
                style={[styles.mealCell, styles.cell]}
              >
                <Text style={styles.mealText}>
                  {truncateText(meals[index][timeZoneIndex], 20)}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength - 3) + "...";
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  table: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerCell: {
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  dateCell: {
    flex: 1,
    padding: 10,
  },
  mealCell: {
    flex: 3,
    padding: 10,
  },
  dateText: {
    fontWeight: "bold",
  },
  mealText: {
    textAlign: "center",
  },
});
export default MenuTable;
