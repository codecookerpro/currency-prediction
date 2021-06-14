import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { mockData } from "./mockup";
import { Button } from "react-bootstrap";

const Home = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  // console.log(background.value === "dark");

  // const [data, setData] = useState({
  //   prediction: "[]",
  //   dataset: "[]"
  // });

  // axios
  //   .get("http://18.223.3.218:80/api/predict/")
  //   .then(res => setData(res.data));

  const [title, setTitle] = useState("1 Minute");

  const state = {
    series: [
      {
        name: "Estimation",
        data: JSON.parse(mockData.prediction),
      },
      {
        name: "Real Currency",
        data: JSON.parse(mockData.dataset),
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "area",
        group: "social",
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
          type: 'xy',
          autoScaleYaxis: true
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2],
        colors: ["#363062", "#2BC155"],
        curve: "straight",
      },
      legend: {
        position: "right",
        itemMargin: {
          horizontal: 5,
          vertical: 10
        },
        offsetY: 50,
        markers: {
          fillColors: ["#363062", "#2BC155"],
          width: 19,
          height: 19,
          strokeWidth: 0,
          radius: 19,
        },
      },
      // markers: {
      //   size: 6,
      //   border: 0,
      //   colors: ["#363062", "#2BC155"],
      //   hover: {
      //     size: 6,
      //   },
      // },
      xaxis: {
        categories: JSON.parse(mockData.timestamp),
        tickAmount: 10,
        tooltip: {
          enabled: false
        },
        labels: {
          rotate: 0,
          format: 'dd/MM', 
        }
      },
      yaxis: {
        forceNiceScale: true,
        labels: {
          style: {
            colors: "#3e4954",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: 100,
          },
          formatter: function(val, index) {
            return val === null ? val : val.toFixed(2);
          }
        },
      },
      fill: {
        colors: ["#363062", "#2BC155"],
        type: "solid",
      },
      grid: {
        borderColor: "#f1f1f1",
      },
      title: {
        text: "Next " + title + " balance prediction",
        align: "center",
        style: {
          fontSize: 18,
        }
      }
    },
  };

  const handleClick = (duration) => {
    setTitle(duration)
  }

  return (
    <>
      <div id="chart" className="bar-chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={600}
        />
      </div>
      <div className="card-body">
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("1 Minute")}>
          Next 1 Minute
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("10 Minutes")}>
          Next 10 Minutes
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("1 Hour")}>
          Next 1 Hour
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("12 Hours")}>
          Next 12 Hours
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("1 Day")}>
          Next 1 Day
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("7 Days")}>
          Next 7 Days
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("1 Month")}>
          Next 1 Month
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("6 Months")}>
          Next 6 Months
        </Button>
        <Button className="m-2" variant="outline-info" onClick={() => handleClick("1 Year")}>
          Next 1 Year
        </Button>
      </div>
    </>
  );
};

export default Home;
