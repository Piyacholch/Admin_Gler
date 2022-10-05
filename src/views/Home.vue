<template>
  <Navbar />
  <div class="box">
    <div class="mt-3 pb-5 px-3">
      <h1>Dashboard</h1>
    </div>
    <div class="row row-1">
      <div class="flexbox px-5">
        <div class="item">
          <div class="content1">
            <p>11111</p>
          </div>
        </div>
        <div class="item">
          <div class="content2">
            <p>22222</p>
          </div>
        </div>
        <div class="item">
          <div class="content3">
            <p>33333</p>
          </div>
        </div>
        <div class="item">
          <div class="content4">
            <p>44444</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-2 px-5 mb-4">
      <div class="col-6 pie">
        <div class="chart-pie">
          <div class="chart">
            <canvas id="myChart" width="400" height="220px"></canvas>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="imformation">One of three columns</div>
      </div>
      <div class="col-3">
        <div class="imformation">One of three columns</div>
      </div>
    </div>
    <div class="row row-3 px-5">
      <div class="dash-2">
        <div class="line-chart">
          5555555555
          <canvas id="myChartline" width="400" height="100" ></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },

  mounted() {
    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 50, 60],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const mcl = document.getElementById("myChartline");

    const myChartline = new Chart(mcl, {
      type: "line",
      data: {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 50, 60],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


    myChart;
    myChartline;
  },
};
</script>

<style scoped>
.box {
  background-color: #fff8e1;
}
.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  margin: 0px -8.5px;
}

.item {
  box-sizing: border-box;
  width: 25%;
  margin-bottom: 20px;
  padding: 0px 8.5px;
}

.content1 {
  color: #242424;
  background-color: #ffcc80;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
}
.content2 {
  color: #242424;
  background-color: #d0d9ff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
}
.content3 {
  color: #242424;
  background-color: #a3e9a4;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
}
.content4 {
  color: #242424;
  background-color: #b39ddb;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
}
.pie {
  padding-left: 0px;
}
.chart-pie {
  background-color: #ffff;
  border-radius: 8px;
}
.chart {
  width: 80%;
  height: auto;
  margin: auto;
}
.imformation {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
}
.dash-2 {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
}
.line-chart{
  width: 80%;
  height: auto;
  margin: auto;
}
</style>