import React from "react";
import { Form, Button, Card, Row, Col, Input, Typography } from "antd";

const { Text } = Typography;

const SingleTransactionBlock = ({
  fetchSingleTransactionBlock,
  singleTransactionBlock,
  singleTransactionBlockError,
}) => {
  const [form] = Form.useForm();

  const onSubmitForm = (values) => {
    fetchSingleTransactionBlock({
      ...values,
    });
    form.resetFields();
  };

  const renderSingleBlock = () => {
    return (
      <Card type="inner" title={singleTransactionBlock.hash}>
        <div>
          <p>Relayed By: {singleTransactionBlock.relayed_by}</p>
          <p>Block Height: {singleTransactionBlock.block_height}</p>
          <p>Block Index: {singleTransactionBlock.block_index}</p>
          <p>Size: {singleTransactionBlock.size}</p>
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
      <Form form={form} name="Single Transaction Block" onFinish={onSubmitForm}>
        <Row gutter={16}>
          <Col xs={6}>
            <Form.Item
              label="Transaction Hash"
              name="txHash"
              rules={[
                { required: true, message: "Please input transaction hash!" },
              ]}
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
      {singleTransactionBlockError && (
        <Text type="danger">{singleTransactionBlockError.message}</Text>
      )}
      {singleTransactionBlock && renderSingleBlock()}
    </Card>
  );
};

export default SingleTransactionBlock;
