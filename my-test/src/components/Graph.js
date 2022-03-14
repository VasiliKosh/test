import React from "react";
import { UserData } from "./Data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Количество просмотров: Возраст от дней недели",
    },
  },
};

// Уточняем дату и день недели
let arrWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]; // массив дней недели
let dateFull = new Date(UserData.map((array) => array.data.o[0].o[0].n)); // определение даты
let dateDay = arrWeek[dateFull.getDay()]; // Определяем день недели и присваиваем название из массива arrWeek[]

// Определяем кол-во просмотров и привязываем его к массиву возрастов
let arrAge = ["adult", "kid", "old", "undefined", "young"]; // массив возрастных групп

const labels = arrWeek;

export const data = {
  labels,
  datasets: [
    {
      label: arrAge[0],
      data: ["5", "10", "15", "10", "5"],
      backgroundColor: ["rgba(200, 200, 255, 0.9)"],
    },
    {
      label: arrAge[1],
      data: ["4", "12", "17", "19", "8"],
      backgroundColor: ["rgba(100, 200, 255, 0.9)"],
    },
    {
      label: arrAge[2],
      data: ["2", "14", "15", "13", "11"],
      backgroundColor: ["rgba(150, 250, 255, 0.9)"],
    },
    {
      label: arrAge[3],
      data: ["5", "8", "11", "7", "5"],
      backgroundColor: ["rgba(10, 90, 125, 0.9)"],
    },
    {
      label: arrAge[4],
      data: ["6", "5", "19", "10", "9"],
      backgroundColor: ["rgba(100, 200, 155, 0.9)"],

    },
  ],
};

export function Graph() {
  return <Bar options={options} data={data} />;
}

export default Graph;
