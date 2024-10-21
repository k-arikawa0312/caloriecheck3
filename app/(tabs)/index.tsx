import {
  View,
  Text,
  LogBox,
  Dimensions,
  ScrollView,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { mediaQuery, useMediaQuery } from "@/hooks/useMediaQuery";
import { styles } from "./indexStyle";
import { Ionicons } from "@expo/vector-icons";
import MenuModal from "../../components/MenuModal";
import MenuTable from "../../components/MenuTable";
import RadarChart from "../../components/RadarChart";
import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { provider } from "../../firebase";
// import auth from "../../firebase";
// import GoogleSignIn from "../../firebase";

export default function HomeScreen() {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [dates, setDates] = useState<string[]>([]);
  const isSp = useMediaQuery(mediaQuery.sp);
  const timeZone = ["朝", "昼", "夕", "間食"];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const meal: string[][] = [
    ["a", "カツ丼", "ハムバーガー", "ラーメン"],
    ["ハムバーガー", "チーズバーガー", "チキンバーガー"],
    ["ハムバーガー", "チーズバーガー", "チキンバーガー"],
    ["n", "o", "p"],
    ["r", "s", "t"],
    ["v", "w", "x"],
    ["z", "aa", "bb"],
  ];
  const captions = {
    a: "カロリー",
    b: "たんぱく質",
    c: "脂質",
    d: "炭水化物",
    e: "カルシウム",
    f: "鉄分",
    g: "ビタミンA",
    h: "ビタミンB1",
    i: "ビタミンB2",
  };
  const data = {
    data: {
      a: 0.8,
      b: 0.2,
      c: 0.5,
      d: 0.7,
      e: 1.2,
      f: 0.6,
      g: 0.5,
      h: 0.2,
      i: 0.4,
    },
  };

  LogBox.ignoreAllLogs();
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const getDates = () => {
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        dates.push(formattedDate);
      }
      setDates(dates);
    };
    getDates();
  }, []);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const contentWidth = (windowWidth - 32) / 4;
  const contentHeight = windowHeight / 20;

  return isSp ? (
    <>
      <View>
        {/* <GoogleSignIn/> */}
        <Text style={styles.spTitleContainer}>Calorie Checker</Text>
      </View>
      <ScrollView>
        <Text style={{ textAlign: "center" }}>今日は{currentDate}</Text>
        <Text style={{ textAlign: "center" }}>過去7日間の献立</Text>
        <MenuTable dates={dates} timeZones={timeZone} meals={meal} />
        <RadarChart
          captions={captions}
          data={data.data}
          size={contentWidth * 3.5}
        />
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.fab,
          {
            width: contentWidth * 0.5,
            height: contentWidth * 0.5,
            borderRadius: (contentWidth * 0.5) / 2,
            right: windowWidth * 0.05,
            bottom: `${windowHeight * 0.002}%`,
          },
        ]}
        onPress={() => {
          setIsModalOpen(true);
        }}
      >
        <Ionicons
          name="add-circle"
          size={contentWidth * 0.6}
          color="dodgerblue"
        />
      </TouchableOpacity>
      {isModalOpen && (
        <MenuModal
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  ) : (
    <View>
      <Text style={styles.pcTitleContainer}>Calorie Checker</Text>
      <View style={styles.pcTopContainer}>
        <Text>今日は{currentDate}です。</Text>
        <Text>過去7日間の献立</Text>
      </View>
      <View style={styles.pcWeekContainer}>
        {dates.map((date, index) => (
          <Text key={index} style={styles.pcDate}>
            {date}
          </Text>
        ))}
      </View>
      <Text>PC版はまだ作成途中です…</Text>
    </View>
  );
}
