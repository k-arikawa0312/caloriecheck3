import React from "react";
import { View } from "react-native";
import Svg, { Polygon, Line, Text as SvgText, Circle } from "react-native-svg";

interface RadarChartProps {
  data: Record<string, number>;
  captions: Record<string, string>;
  size: number;
  maxValue?: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ data, captions, size, maxValue = 1 }) => {
  const keys = Object.keys(data);
  const numberOfPoints = keys.length;
  const angleSlice = (Math.PI * 2) / numberOfPoints;
  const radius = size / 2.5;
  const svgSize = size * 1.2;
  const centerOffset = svgSize / 2;
  const labelOffset = radius * 0.2;
  const scaleSteps = 5;

  const dataPoints = keys.map((key, i) => {
    const value = data[key] / maxValue; // Normalize the value
    const angle = i * angleSlice;
    const x = centerOffset + radius * value * Math.cos(angle);
    const y = centerOffset - radius * value * Math.sin(angle);
    return { x, y, value: data[key] };
  });

  const points = dataPoints.map(point => `${point.x},${point.y}`).join(" ");

  const gridPoints = Array.from({ length: scaleSteps }, (_, i) => {
    const r = radius * ((i + 1) / scaleSteps);
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
          <React.Fragment key={i}>
            <Polygon
              points={points}
              stroke="gray"
              strokeWidth="1"
              fill="none"
            />
            <SvgText
              x={centerOffset}
              y={centerOffset - (radius * (i + 1)) / scaleSteps + 10}
              fontSize="10"
              fill="black"
              textAnchor="middle"
            >
              {`${((i + 1) * maxValue / scaleSteps)*100}%`}
            </SvgText>
          </React.Fragment>
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
        {dataPoints.map((point, i) => (
          <React.Fragment key={i}>
            <Circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="blue"
            />
            <SvgText
              x={point.x}
              y={point.y - 10}
              fontSize="10"
              fill="blue"
              textAnchor="middle"
            >
              {`${Math.floor(point.value*100)}%`}
            </SvgText>
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
};

export default RadarChart;