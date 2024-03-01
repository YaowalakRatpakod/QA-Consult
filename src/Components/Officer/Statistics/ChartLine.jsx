import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);


const ChartLine = ({ filter }) => {
    // _State
    const [summaryInfo, setSummaryInfo] = useState([]);
    const [infoUsers, setInfoUsers] = useState([]);
    const [reports, setReports] = useState([]);
    const info = [];


    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            //   legend: {
            //     position: "top" as const,
            //     labels: {
            //       font: {
            //         size: 16,
            //       },
            //     },
            //   },
            title: {
                display: true,
                text: "จำนวนชั่วโมงทั้งหมดแต่ละสาขา",
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    const data = {
        labels: filter.map((label) => label.topic_section),
        datasets: [
          {
            label: "จำนวนชั่วโมงแต่ละสาขา(ชั่วโมง)",
            data: filter.map((data) => data.submission_date),
            borderColor: "#FFC5C5",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderWidth: 5,
          },
        ],
      };

    console.log("chart check filter : ",filter);

    return (
        <div
            className={(`h-full w-full`, `sm:overflow-hidden sm:overflow-x-auto`)}
        >
            <div className={([`relative`, `sm:h-40-vh sm:w-80-vh`])}>
                <Line options={options} data={data} className="canvas" />
            </div>
        </div>
    );
};

export default ChartLine;