import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Linech() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์'],
                datasets: [{
                    label: 'UP01 คำร้องทั่วไป',
                    data: [10, 20, 30, 10, 50, 40],
                    fill: false,
                    borderColor: '#165BAA',
                    backgroundColor: '#165BAA',
                    borderWidth: 2
                },
                {
                    label: 'UP08 คำร้องขอถอนรายวิชา โดยได้รับอักษร W',
                    data: [10, 10, 20, 10, 5, 30],
                    fill: false,
                    borderColor: '#A155B9',
                    backgroundColor: '#A155B9',
                    borderWidth: 2
                },
                {
                    label: 'UP03 คำร้องขอใบรายงานผลการศึกษา (Transcript)',
                    data: [5, 10, 15, 10, 5, 40],
                    fill: false,
                    borderColor: '#F765A3',
                    backgroundColor: '#F765A3',
                    borderWidth: 2
                },
                {
                    label: 'UP09 คำร้องขอเทียบโอนรายวิชา',
                    data: [45, 40, 15, 10, 35, 40],
                    fill: false,
                    borderColor: '#ef4444',
                    backgroundColor: '#ef4444',
                    borderWidth: 2
                },
                {
                    label: 'UP10 คำร้องขอย้ายคณะ/หลักสูตร/แผนการเรียน',
                    data: [45, 10, 35, 10, 5, 10],
                    fill: false,
                    borderColor: '#f97316',
                    backgroundColor: '#f97316',
                    borderWidth: 2
                },

                ]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        display: true,
                    }
                },
                order: 1 // กำหนดให้ข้อมูลใน datasets เรียงลำดับตามลำดับที่กำหนด
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <canvas ref={chartRef} style={{ width: '150px', height: '150px' }} />
        </div>
    );
}
