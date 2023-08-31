import { FC, useEffect, useState } from "react";
import { Area, AreaChart, AreaChartProps, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getChartData } from "../../utils/api";
import Loader from "../Loader";

import styles from "./CPUUtilizationChart.module.css";

type DataState = object[] | undefined;

function formatter(value: string | number | Array<string | number>, name: string, props: object) {
  if (typeof value !== "number") {
    return 0;
  }

  const percent = (value * 100).toFixed(2);

  return `${percent}%`;
}

const CPUUtilizationChart: FC<{}> = () => {
  const [data, setData] = useState<DataState>(undefined);

  useEffect(() => {
    getChartData(["cpuUtil"])
      .then((data) => {
        return data.slice(-24);
      })
      .then((data) => {
        setData(data);
      })
  }, []);

  return (
    <div className={styles.container}>
      <Loader loading={data === undefined}>
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="inColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4242" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#FF4242" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="CPUUtilization" stroke="#FF4242" fillOpacity={1} fill="url(#inColor)" />
            <XAxis dataKey="timestamp" tickLine={false} />
            <Tooltip formatter={formatter} />
          </AreaChart>
        </ResponsiveContainer>
      </Loader>
    </div>
  );
}

export default CPUUtilizationChart;
