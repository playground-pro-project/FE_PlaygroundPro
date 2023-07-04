import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

interface DataItem {
  venue: string;
  count: number;
}

const ChartSide = () => {
  const data: DataItem[] = [
    { venue: "Venue 1", count: 10 },
    { venue: "Venue 2", count: 30 },
    { venue: "Venue 3", count: 20 },
    { venue: "Venue 5", count: 50 },
    { venue: "Venue 6", count: 10 },
    { venue: "Venue 7", count: 55 },
    { venue: "Venue 8", count: 53 },
    { venue: "Venue 9", count: 15 },
    { venue: "Venue 10", count: 20 }
    
  ];

  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    Chart.register(...registerables);

    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.map((row) => row.venue),
        datasets: [
          {
            label: 'Chart Venue',
            data: data.map((row) => row.count),
            fill: true,
          },
        ],
      },
      options: {
        animation: {
          duration: 0, 
        },
      },

    };

    const chartElement = document.getElementById('acquisitions') as ChartItem;
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    
    if (chartElement) {
      chartRef.current = new Chart(chartElement, chartConfig);
    }
  }, [data]);

  return (
    <>
    <div className='w-full' >
      <canvas  id="acquisitions"  ></canvas>
    </div>
    </>
  );
};

export default ChartSide;
