import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";
import { LineGraph } from "./LineGraph";

Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

export const Allcharts = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <LineGraph />
          </Col>

          <Col md={6}>
            <BarChart />
          </Col>

          <Col md={6}>
            <DoughnutChart />
          </Col>

          <Col md={6}>
            <PieChart />
          </Col>
        </Row>
      </Container>
    </>
  );
};
