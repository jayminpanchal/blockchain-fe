import React from "react";
import { Form, Button, Card, Row, Col, Input, Typography } from "antd";

const { Text } = Typography;

const SingleBlock = ({ fetchSingleBlock, singleBlock, singleBlockError }) => {
  const [form] = Form.useForm();

  const onSubmitForm = (values) => {
    fetchSingleBlock({
      ...values,
    });
    form.resetFields();
  };

  const renderSingleBlock = () => {
    return (
      <Card type="inner" title={singleBlock.hash}>
        <div>
          <p>Bits: {singleBlock.bits}</p>
          <p>Fee: {singleBlock.fee}</p>
          <p>Block Index: {singleBlock.blockIndex}</p>
          <p>Size: {singleBlock.size}</p>
        </div>
      </Card>
    );
  };

  return (
    <Card
      title="Single Block"
      style={{
        width: "100%",
        flexDirection: "column",
        flex: 1,
        display: "flex",
        marginTop: 16,
      }}
    >
      <Form form={form} name="Single Block" onFinish={onSubmitForm}>
        <Row gutter={16}>
          <Col xs={6}>
            <Form.Item
              label="Block Hash"
              name="blockHash"
              rules={[{ required: true, message: "Please input block hash!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {singleBlockError && (
        <Text type="danger">{singleBlockError.message}</Text>
      )}
      {singleBlock && renderSingleBlock()}
    </Card>
  );
};

export default SingleBlock;
