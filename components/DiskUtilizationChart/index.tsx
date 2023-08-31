import { FC, useEffect, useState } from "react";
import { Area, AreaChart, AreaChartProps, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getChartData } from "../../utils/api";
import Loader from "../Loader";

import styles from "./DiskUtilizationChart.module.css";

type DataState = object[] | undefined;

function formatter(value: string | number | Array<string | number>, name: string, props: object) {
  if (typeof value !== "number") {
    return 0;
  }

  return `${value.toFixed(0)} Bytes`;
}

const DiskUtilizationChart: FC<{}> = () => {
  const [data, setData] = useState<DataState>(undefined);

  useEffect(() => {
    getChartData(["diskReads", "diskWrites"])
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
              <linearGradient id="readColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4242" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#FF4242" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="writeColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#11B5E4" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#11B5E4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="DiskReadBytes" stroke="#FF4242" fillOpacity={1} fill="url(#readColor)" />
            <Area type="monotone" dataKey="DiskWriteBytes" stroke="#11B5E4" fillOpacity={1} fill="url(#writeColor)" />
            <XAxis dataKey="timestamp" tickLine={false} />
            <Tooltip formatter={formatter} />
          </AreaChart>
        </ResponsiveContainer>
      </Loader>
    </div>
  );
}

export default DiskUtilizationChart;
