"use client";
import { useGetAllUsersQuery } from "@/redux/features/Auth/authApi";
import { useGetAllPaymentsHistoriesQuery } from "@/redux/features/Payment/paymentApi";
import { useGetAllPostsQuery } from "@/redux/features/Posts/postsApi";
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Registering components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const { data: allUsers } = useGetAllUsersQuery({});
  const { data: allPosts } = useGetAllPostsQuery({});
  const { data: allPaymentHistory } = useGetAllPaymentsHistoriesQuery({});

  const userCount = allUsers?.data?.length || 0;
  const postCount = allPosts?.data?.length || 0;
  const paymentHistoryCount = allPaymentHistory?.data?.length || 0;

  const barData = {
    labels: ['Users', 'Posts', 'Payments'],
    datasets: [
      {
        label: 'Counts',
        data: [userCount, postCount, paymentHistoryCount],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Users', 'Posts', 'Payments'],
    datasets: [
      {
        data: [userCount, postCount, paymentHistoryCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bar Chart: Dashboard Overview',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Pie Chart: Dashboard Overview',
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-10 justify-around">
        <div className="w-full">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="w-full">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
