import React, { useState } from "react";
import { useEffect } from "react";
import { fetchdailydata } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setdailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchdailydata());
      // console.log(dailyData);
    };
    fetchAPI();
  }, []);
  const Linechart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "blue",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const barc = confirmed ? (
    <Bar
      data={{
        labels: ["INFECTED", "RECOVERED", "DEATHS"],
        datasets: [
          {
            label: "people",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;
  return <div className={styles.container}>{country ? barc : Linechart}</div>;
};
export default Chart;
