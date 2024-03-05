import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";

const DealsChart = () => {

  const config: AreaConfig = {
    data : []
  }

  return (
    <div>
      <Card
        style={{ height: "100%" }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "24px 24px 0 24px" }}
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DollarOutlined />
            <Text size="sm" style={{ marginLeft: "0.5rem" }}>
              Deals
            </Text>
          </div>
        }
      >
        <Area {...config} height={325} />
      </Card>
    </div>
  );
};

export default DealsChart;
