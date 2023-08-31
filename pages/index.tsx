import Grid from "@react-css/grid";
import type { NextPage } from "next";
import Head from "next/head";
import AlertSummary from "../components/AlertSummary";
import Container from "../components/Container";
import CPUUtilizationChart from "../components/CPUUtilizationChart";
import DiskUtilizationChart from "../components/DiskUtilizationChart";
import NetworkVolumeChart from "../components/NetworkVolumeChart";
import ThreatCategoryChart from "../components/ThreatCategoryChart";
import ThreatVolumeChart from "../components/ThreatVolumeChart";

const API_ENDPOINT = "http://172.18.24.104:8080/";

function mockAlerts() {
  const alerts = [];
  for (let i = 1; i <= 5; i++) {
    alerts.push({
      id: i,
      name: `Alert ${i}`,
      description: "This is an example alert",
    })
  }
  return alerts;
}

const alertData = mockAlerts();

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monitoring Dashboard</title>
        <meta name="description" content="Monitor your IaaS network for potential threats." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid columns="1fr 1fr" gap="2em">
          <Grid.Item column="1 / span 2">
            <h2>Network Usage</h2>
            <NetworkVolumeChart/>
          </Grid.Item>

          
          <Grid.Item column="1 / 2">
            <h2>Disk Usage</h2>
            <DiskUtilizationChart />
          </Grid.Item>

          <Grid.Item column="2 / span 2">
            <h2>CPU Utilization</h2>
            <CPUUtilizationChart />
          </Grid.Item>

          <Grid.Item column="1 / 2">
            <h2>Recent Alerts</h2>
            {
              alertData.map(
                alert => 
                  <AlertSummary key={alert.id} id={`${alert.id}`} name={alert.name} description={alert.description} />
              )
            }
          </Grid.Item>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
