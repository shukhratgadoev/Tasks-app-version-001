import React from "react";
//UI Components
import { Layout, Typography } from "antd";

//Components
import Task from "../containers/Task";
const { Content, Header } = Layout;
const { Title } = Typography;

const Main = () => {
  return (
    <Layout>
      <Content>
        <Header>
          <Title level={4} style={{ color: "#fff" }}>
            Simple Task with React, TypeScript, Redux and Antd design
          </Title>
        </Header>

        <Task />
      </Content>
    </Layout>
  );
};

export default Main;
