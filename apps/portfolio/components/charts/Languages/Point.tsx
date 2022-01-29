import { BumpPoint } from "@nivo/bump";

const CustomPoint = ({ point }: { point: BumpPoint<any, any> }) => {
  return (
    <g
      transform={`translate(${point.x}, ${point.y})`}
      style={{ pointerEvents: "none" }}
    >
      <circle
        r={point.size}
        fill={point.color}
        stroke={point.borderColor}
        strokeWidth={point.borderWidth}
      />
      {point.isActive && (
        <text
          textAnchor="middle"
          y={4}
          fill={point.borderColor}
          className="text-xs"
        >
          {`${10 - point.data.y}/10`}
        </text>
      )}
    </g>
  );
};

export default CustomPoint;
