import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import styles from "./ThreatVolumeChart.module.css";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mockData() {
  // The number of days to generate fake data for
  const DAYS_AGO = 7;

  const data = [];

  // Populate data with the dates from a week ago to today
  const today = new Date();
  const start = new Date(new Date().setDate(today.getDate() - DAYS_AGO));
  for (let curr = start; curr <= today; curr.setDate(curr.getDate() + 1)) {
    data.push({
      name: curr.toLocaleDateString("en-US"),
      volume: randomBetween(30, 100),
    });
  }

  data.push({
    name: "",
    volume: randomBetween(30, 100),
  });

  return data;
}

const data = mockData();

const ThreatVolumeChart = () => {
  return (
    <div className={styles.container}>
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4242" stopOpacity={0.8} />
              <stop offset="80%" stopColor="#FF4242" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="volume" stroke="#FF4242" fillOpacity={1} fill="url(#colorVolume)" />
          <XAxis dataKey="name" tickLine={false} />
          <Tooltip label="Test" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ThreatVolumeChart;
