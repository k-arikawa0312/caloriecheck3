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
  const radius = size / 2.5; // チャートサイズを少し小さくする
  const svgSize = size * 1.2; // SVGサイズを大きくする
  const centerOffset = svgSize / 2; // 中心点のオフセット
  const labelOffset = radius * 0.2; // ラベルのオフセットを調整

  const points = keys
    .map((key, i) => {
      const value = data[key];
      const angle = i * angleSlice;
      const x = centerOffset + radius * value * Math.cos(angle);
      const y = centerOffset - radius * value * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  const gridPoints = Array.from({ length: 5 }, (_, i) => {
    const r = radius * ((i + 1) / 5);
    return keys
      .map((_, j) => {
        const angle = j * angleSlice;
        const x = centerOffset + r * Math.cos(angle);
        const y = centerOffset - r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 50 }}>
      <Svg width={svgSize} height={svgSize}>
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
          const x = centerOffset + radius * Math.cos(angle);
          const y = centerOffset - radius * Math.sin(angle);
          return (
            <Line
              key={i}
              x1={centerOffset}
              y1={centerOffset}
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
          const x = centerOffset + (radius + labelOffset) * Math.cos(angle);
          const y = centerOffset - (radius + labelOffset) * Math.sin(angle);
          return (
            <SvgText
              key={i}
              x={x}
              y={y}
              fontSize="12"
              fill="black"
              textAnchor="middle"
              alignmentBaseline="middle"
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