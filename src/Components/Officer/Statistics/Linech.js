import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Linech({ filter }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        const labels = filter === 'week' ? ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์'] :
            ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน'];

        const datasets = [
            {
                label: 'UP01 คำร้องทั่วไป',
                data: filter === 'week' ? [10, 20, 30, 10, 50, 40] : [100, 200, 150, 300, 200, 250],
                fill: false,
                borderColor: '#165BAA',
                backgroundColor: '#165BAA',
                borderWidth: 2
            },
            {
                label: 'UP08 คำร้องขอถอนรายวิชา โดยได้รับอักษร W',
                data: filter === 'week' ? [10, 10, 20, 10, 5, 30] : [50, 30, 40, 60, 45, 55],
                fill: false,
                borderColor: '#A155B9',
                backgroundColor: '#A155B9',
                borderWidth: 2
            },
            {
                label: 'UP03 คำร้องขอใบรายงานผลการศึกษา (Transcript)',
                data: filter === 'week' ? [5, 10, 15, 10, 5, 40] : [30, 40, 50, 60, 70, 80],
                fill: false,
                borderColor: '#F765A3',
                backgroundColor: '#F765A3',
                borderWidth: 2
            },
            {
                label: 'UP09 คำร้องขอเทียบโอนรายวิชา',
                data: filter === 'week' ? [45, 40, 15, 10, 35, 40] : [80, 70, 60, 50, 40, 30],
                fill: false,
                borderColor: '#ef4444',
                backgroundColor: '#ef4444',
                borderWidth: 2
            },
            {
                label: 'UP10 คำร้องขอย้ายคณะ/หลักสูตร/แผนการเรียน',
                data: filter === 'week' ? [45, 10, 35, 10, 5, 10] : [20, 30, 40, 50, 60, 70],
                fill: false,
                borderColor: '#f97316',
                backgroundColor: '#f97316',
                borderWidth: 2
            }
        ];

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
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
    }, [filter]);

    return (
        <div>
            <canvas ref={chartRef} style={{ width: '150px', height: '150px' }} />
        </div>
    );
}
