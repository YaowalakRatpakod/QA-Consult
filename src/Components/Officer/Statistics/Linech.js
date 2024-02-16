import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function Linech({ filter }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

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

        const colors = ["#165BAA", "#A155B9", "#F765A3", "#ef4444", "#f97316"];

        const labelSet = new Set(); // ใช้ Set เพื่อเก็บค่าหัวข้อที่มีอยู่แล้ว

         // ดึงข้อมูล topic_id และ topic_section จาก response และแยกออกมาเป็น labels สำหรับ Chart.js
         const labels = completedRequests.map(request => `${request.topic_id} - ${request.topic_section}`);

        // สร้าง datasets โดยใช้สีตามลำดับในอาร์เรย์ colors
        const datasets = completedRequests.map((request, index) => {
            const label = `${request.topic_id} - ${request.topic_section}`;
            if (!labelSet.has(label)) { // ตรวจสอบว่าหัวข้อนี้เคยถูกสร้างไว้แล้วหรือไม่
                labelSet.add(label); // เพิ่มหัวข้อเข้าไปใน Set เพื่อระบุว่าเคยสร้างไว้แล้ว
                return {
                    label: label,
                    data: filter === "week" ? [1, 1, 1, 1, 1, 1] : [1, 1, 1, 1, 1, 1],
                    fill: false,
                    borderColor: colors[index % colors.length], // กำหนดสีให้กับแต่ละหัวข้อ
                    backgroundColor: colors[index % colors.length],
                    borderWidth: 2,
                };
            } else {
                // หากหัวข้อซ้ำกันให้หา index ของหัวข้อที่ซ้ำ
                const existingIndex = labels.findIndex(existingLabel => existingLabel === label);
                // เพิ่มข้อมูลใหม่เข้าไปใน datasets ที่มี index เดียวกับหัวข้อที่ซ้ำ
                datasets[existingIndex].data = datasets[existingIndex].data.map(value => value + 1);
                return null; // ไม่สร้าง datasets ใหม่ เพราะมีข้อมูลซ้ำกันแล้ว
            }
        }).filter(dataset => dataset !== null); // กรองออกเฉพาะ datasets ที่ไม่เป็น null

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
          type: "line",
          data: {
            labels: labels,
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
            order: 1, // กำหนดให้ข้อมูลใน datasets เรียงลำดับตามลำดับที่กำหนด
          },
        });
      } catch (error) {
        console.error("Error fetching completed requests:", error);
      }
    };

    fetchCompletedRequests();

  }, [filter]);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "150px", height: "150px" }} />
    </div>
  );
}
