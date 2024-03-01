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
        const { completedRequests } = response.data;

        // console.log("check res : ", completedRequests);

        // Filter completed requests based on the selected filter (week/month)
        const filteredRequests = completedRequests.filter(request => {
          // Assuming request.date contains the date information
          // Filter requests based on week/month logic here
          return true;
        });

        // Count completed requests for each topic_id
        const topicCountMap = {};
        filteredRequests.forEach(request => {
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
          const dataPoints = filteredRequests
            .filter(request => request.topic_id === topic_id)
            .map((request, i) => ({ x: i, y: i + 1 }));


          // const dataPoints = filteredRequests
          // .filter(request => request.topic_id === topic_id)
          // .map((request, i) => ({ x: i, y: topicCountMap[request.topic_id] }));

          return {
            label: topic_id,
            data: dataPoints,
            fill: false,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
          };
        });

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
          type: "line",
          data: {
            labels: topFive,
            datasets: datasets,
          },
          options: {
            plugins: {
              legend: {
                position: "bottom",
                align: "center",
                display: true,
              },
            },
            elements: {
              line: {
                tension: 0.4,
              }
            },
            scales: {
              y: {
                ticks: {
                  stepSize: 1,
                }
              }
            },
            order: 1, // Order the datasets
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
      <canvas ref={chartRef} style={{ width: "150px", height: "150px" }} />
    </div>
  );
}