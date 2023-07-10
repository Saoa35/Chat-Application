import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={5}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control type="email" placeholder="Enter you email" />
              <Form.Control type="password" placeholder="Enter you password" />
              <Button variant="secondary" type="submit">
                Login
              </Button>
              <Alert variant="danger">
                <p>Something went wrong 😕</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};
