import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function Linech({ filter }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [topFiveTopicIds, setTopFiveTopicIds] = useState([]);

  useEffect(() => {
    const fetchCompletedRequests = async () => {
      try {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const response = await axios.get(
          "http://127.0.0.1:8000/api/user-consultation-requests-all/success/"
        );
        const completedRequests = response.data;

        // Count completed requests for each topic_id
        const topicCountMap = {};
        completedRequests.forEach((request) => {
          const { topic_id } = request;
          topicCountMap[topic_id] = (topicCountMap[topic_id] || 0) + 1;
        });

        // Sort topic_id by completed request count in descending order
        const sortedTopicIds = Object.keys(topicCountMap).sort(
          (a, b) => topicCountMap[b] - topicCountMap[a]
        );

        // Get top five topic_ids
        const topFive = sortedTopicIds.slice(0, 5);
        setTopFiveTopicIds(topFive);

        // Prepare datasets for Chart.js
        const datasets = topFive.map((topic_id, index) => {
          const color = getRandomColor();
          const dataPoint = topicCountMap[topic_id];

          return dataPoint;
        });

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
          type: "line",
          data: {
            labels: topFive,
            datasets: [
              {
                label: "Number of Successful Requests",
                data: datasets,
                backgroundColor: Array(5).fill(getRandomColor()),
                borderColor: Array(5).fill(getRandomColor()),
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                ticks: {
                  stepSize: 1,
                },
                beginAtZero: true,
              },
            },
          },
        });
      } catch (error) {
        console.error("Error fetching completed requests:", error);
      }
    };

    fetchCompletedRequests();
  }, [filter]);

  // Function to generate random color
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "200px", height: "80px" }} />
    </div>
  );
}