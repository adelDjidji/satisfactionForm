import React from "react";
import { Layout, Menu, Input, Row, Col } from "antd";
import Login from "./Login";
import { UserOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { API_URL } from "../App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Header, Content, Footer } = Layout;

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 22, 43, 11, 12, 10, 33],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [12, 13, 15, 32, 43, 23, 55],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Dashboard() {
  const [loading, setloading] = React.useState(true);
  const [contectedUser, setcontectedUser] = React.useState(null);
  const [dashboardData, setdashboardData] = React.useState()

  const options = [
    {
      label: "Libraries",
      options: ["AntDesign", "AntDesign UI"],
    },
    {
      label: "Textes",
      options: ["AntDeseeign", "AntDe"],
    },
  ];

  const loadData = async (url) => {
    try {
      const response = await fetch(API_URL + "")
      .then((res) => res.json())
      .then((res) => {
        return res
      });

      //response will have data of dashboard
      console.log(response)
      // setdashboardData(response.data)
      setloading(false)
    } catch (error) {
      console.log("error", error)
      setloading(false)
    }
   
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    setcontectedUser(user);
    loadData()
  }, []);

  if (loading) return <div>Loading</div>;
  if (!loading && !contectedUser) return <Login />;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={"1"}>{`Dashboard`}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "40px 50px" }}>
       
        <div className="site-layout-content">
          <Row className="filters" justify="space-between" align="middle">
            <Col span={2}>
              <p>Filtrer par:</p>
            </Col>
            <Col span={5}>
              <Input.Search size="large" placeholder="Client" />
            </Col>
            <Col span={5}>
              <Input.Search size="large" placeholder="Cabinet" />
            </Col>
            <Col span={5}>
              <Input.Search size="large" placeholder="Responsable du RDV" />
            </Col>
            <Col span={5}>
              <Input.Search
                size="large"
                placeholder="Responsable du dossier "
              />
            </Col>
          </Row>
        </div>

        <Bar options={options} data={data} />
      </Content>
      <Footer style={{ textAlign: "center" }}>©2021</Footer>
    </Layout>
  );
}
