import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import styles from "./ThreatCategoryChart.module.css";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mockData() {
  return [
      {
        name: "Category 1",
        volume: randomBetween(30, 100),
        color: "#575FCF"
      },
      {
        name: "Category 2",
        volume: randomBetween(30, 100),
        color: "#6BC940"
      },
      {
        name: "Category 3",
        volume: randomBetween(30, 100),
        color: "#FF4242"
      },
      {
        name: "Category 4",
        volume: randomBetween(30, 100),
        color: "#11B5E4"
      }
  ];
}

const data = mockData();

const ThreatCategoryChart = () => (
  <div className={styles.container}>
    <ResponsiveContainer height="100%" width="100%">
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" dataKey="volume" nameKey="name" outerRadius={80} innerRadius={60} paddingAngle={5} label>
            {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none"/>
                ))
            }
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ThreatCategoryChart;
