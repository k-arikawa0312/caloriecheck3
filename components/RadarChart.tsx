import React from "react";
import { View } from "react-native";
import Svg, { Polygon, Line, Text as SvgText } from "react-native-svg";

interface RadarChartProps {
  data: Record<string, number>;
  captions: Record<string, string>;
  size: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ data, captions, size }) => {
  const keys = Object.keys(data);
  const numberOfPoints = keys.length;
  const angleSlice = (Math.PI * 2) / numberOfPoints;
  const radius = size / 2;
  const labelOffset = 30; // ラベルのオフセットを追加

  const points = keys
    .map((key, i) => {
      const value = data[key];
      const angle = i * angleSlice;
      const x = radius + radius * value * Math.cos(angle);
      const y = radius - radius * value * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  const gridPoints = Array.from({ length: 5 }, (_, i) => {
    const r = radius * ((i + 1) / 5);
    return keys
      .map((_, j) => {
        const angle = j * angleSlice;
        const x = radius + r * Math.cos(angle);
        const y = radius - r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size}>
        {gridPoints?.map((points, i) => (
          <Polygon
            key={i}
            points={points}
            stroke="gray"
            strokeWidth="1"
            fill="none"
          />
        ))}
        {keys?.map((key, i) => {
          const angle = i * angleSlice;
          const x = radius + radius * Math.cos(angle);
          const y = radius - radius * Math.sin(angle);
          return (
            <Line
              key={i}
              x1={radius}
              y1={radius}
              x2={x}
              y2={y}
              stroke="gray"
              strokeWidth="1"
            />
          );
        })}
        <Polygon
          points={points}
          stroke="blue"
          strokeWidth="2"
          fill="rgba(0, 0, 255, 0.3)"
        />
        {keys.map((key, i) => {
          const angle = i * angleSlice;
          const x = radius + (radius + labelOffset) * Math.cos(angle);
          const y = radius - (radius + labelOffset) * Math.sin(angle);
          return (
            <SvgText
              key={i}
              x={x}
              y={y}
              fontSize="10"
              fill="black"
              textAnchor="middle"
            >
              {captions[key]}
            </SvgText>
          );
        })}
      </Svg>
    </View>
  );
};

export default RadarChart;
