import {
    View,
    Text,
    Dimensions,
    ScrollView,
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
  import SuggestMenu from "@/components/SuggestMenu";
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomTabNavigator from "@/components/BottomTabNavigator";
import { contentWidth, windowHeight, windowWidth } from "@/constants/Responsive";

// ナビゲーションの型を定義
type PastMenuProps = {
  navigation: NativeStackNavigationProp<{
    HomeScreen: undefined; // 'Home'画面のパラメータの型
    // 他の画面の型を追加することも可能
  }>;
};

const PastMenu:React.FC<PastMenuProps>=()=>{  
    const [currentDate, setCurrentDate] = useState<string>("");
    const [dates, setDates] = useState<string[]>([]);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState<boolean>(false);
    const [isAddUserModalOpen,setIsAddUserModalOpen]=useState<boolean>(false)
    const isSp = useMediaQuery(mediaQuery.sp);
    const timeZone = ["朝", "昼", "夕", "間食"];
    const meals: string[][] = [
    ["a", "カツ丼", "ハムバーガー", "ラーメン"],
    ["ハムバーガー", "チーズバーガー", "チキンバーガー","aaa"],
    ["ハムバーガー", "チーズバーガー", "チキンバーガー","qqq"],
    ["n", "o", "p","aqa"],
    ["r", "s", "t","oosos"],
    ["v", "w", "x","aksks"],
    ["z", "aa", "bb","kdkd"],
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
        a: 0.81,
        b: 0.22,
        c: 0.53,
        d: 0.74,
        e: 1.25,
        f: 0.66,
        g: 0.57,
        h: 0.28,
        i: 0.49,
    },
    };

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
    

    return isSp ? (
    <>
        <View>
        <Text style={styles.spTitleContainer}>Calorie Checker</Text>
        {/* <TouchableOpacity onPress={()=>setIsAddUserModalOpen(true)}>
        </TouchableOpacity> */}
        </View>
        <ScrollView>
        <Text style={{ textAlign: "center" }}>今日は{currentDate}</Text>
        <RadarChart
            captions={captions}
            data={data.data}
            size={contentWidth * 3.5}
        />
        <MenuTable dates={dates} timeZones={timeZone} meals={meals} />
        {/* <SuggestMenu></SuggestMenu> */}
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
            setIsMenuModalOpen(true);
        }}
        >
        <Ionicons
            name="add-circle"
            size={contentWidth * 0.6}
            color="dodgerblue"
        />
        </TouchableOpacity>
        {isMenuModalOpen && (
        <MenuModal
            visible={isMenuModalOpen}
            onClose={() => setIsMenuModalOpen(false)}
        />
        )}
        {/* {isAddUserModalOpen && (
        <SignupForm
            visible={isAddUserModalOpen}
            onClose={() => setIsAddUserModalOpen(false)}
        />
        )} */}
        <BottomTabNavigator/>
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

export default PastMenu