import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Reports.css'; 

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Define the salesData array here
const salesData = [
  {
    date: '2024-08-01',
    amount: 999,
    items: ['Garlic Bread', 'Mango Milkshake'],
  },
  {
    date: '2024-08-02',
    amount: 2199,
    items: ['Pepperoni Pizza', 'Caesar Salad', 'Tiramisu'],
  },
  {
    date: '2024-08-03',
    amount: 2899,
    items: ['Paneer Tikka Pizza', 'Pasta Carbonara', 'Choco Lava Cake'],
  },
  // ... (Include the rest of the dataset here)
];

const Reports = ({ products = {} }) => {
  if (typeof products !== 'object' || products === null) {
    return <div>No product data available</div>;
  }

  // Calculate sales by day of the week
  const salesByDay = salesData.reduce((acc, sale) => {
    const day = new Date(sale.date).getDay();
    acc[day] = (acc[day] || 0) + sale.amount;
    return acc;
  }, {});

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const salesByDayChartData = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Sales by Day of the Week',
        data: daysOfWeek.map((_, index) => salesByDay[index] || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const salesByDayOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ₹${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales Amount',
        },
        ticks: {
          callback: function(value) {
            return `₹${value}`;
          },
        },
      },
    },
  };

  // Calculate frequency of sale of each item
  const itemFrequency = salesData.reduce((acc, sale) => {
    sale.items.forEach(item => {
      acc[item] = (acc[item] || 0) + 1;
    });
    return acc;
  }, {});

  const itemFrequencyChartData = {
    labels: Object.keys(itemFrequency),
    datasets: [
      {
        label: 'Frequency of Sale',
        data: Object.values(itemFrequency),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const itemFrequencyOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  // Find best selling item in each category
  const bestSellingItems = Object.keys(products).reduce((acc, category) => {
    const categoryItems = products[category] || [];
    const salesInCategory = categoryItems.map(item => ({
      ...item,
      sold: salesData.reduce((sum, sale) => sum + (sale.items.includes(item.name) ? 1 : 0), 0),
    }));
    const bestSeller = salesInCategory.reduce((best, item) => item.sold > best.sold ? item : best, { sold: 0 });
    acc[category] = bestSeller.name;
    return acc;
  }, {});

  return (
    <div className="reports-container">
      <h1>Sales Reports</h1>

      <div className="chart-container">
        <h2>Sales by Day of the Week</h2>
        <Bar data={salesByDayChartData} options={salesByDayOptions} />
      </div>

      <div className="pie-chart-container">
        <h2>Frequency of Sale for Each Item</h2>
        <Pie data={itemFrequencyChartData} options={itemFrequencyOptions} />
      </div>

      <div className="best-selling-items">
        <h2>Best Selling Items by Category</h2>
        {Object.keys(bestSellingItems).map(category => (
          <div key={category}>
            <h3>{category}</h3>
            <p>{bestSellingItems[category]}</p>
          </div>
        ))}
      </div>

      <div className="additional-analytics">
        <h2>Additional Analytics</h2>
        <p>Total Sales: ₹{salesData.reduce((acc, sale) => acc + sale.amount, 0)}</p>
        <p>Number of Orders: {salesData.length}</p>
      </div>
    </div>
  );
};

export default Reports;
