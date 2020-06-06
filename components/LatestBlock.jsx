import React from "react";
import { Form, Button, Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

const SingleBlock = ({ fetchLatestBlock, latestBlock, latestBlockError }) => {
  const [form] = Form.useForm();

  const onSubmitForm = () => {
    fetchLatestBlock();
    form.resetFields();
  };

  const renderSingleBlock = () => {
    return (
      <Card type="inner" title={latestBlock.hash}>
        <div>
          <p>Height: {latestBlock.height}</p>
          <p>Block Index: {latestBlock.block_index}</p>
        </div>
      </Card>
    );
  };

  return (
    <Card
      title="Latest Block"
      style={{
        width: "100%",
        flexDirection: "column",
        flex: 1,
        display: "flex",
        marginTop: 16,
      }}
    >
      <Form form={form} name="Latest Block" onFinish={onSubmitForm}>
        <Row gutter={16}>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Fetch Latest
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {latestBlockError && (
        <Text type="danger">{latestBlockError.message}</Text>
      )}
      {latestBlock && renderSingleBlock()}
    </Card>
  );
};

export default SingleBlock;
