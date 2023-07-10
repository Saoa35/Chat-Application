import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

export const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={5}>
            <Stack gap={3}>
              <h2>Register</h2>

              <Form.Control
                type="text"
                placeholder="Enter you name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Enter you email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Enter you password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="secondary" type="submit">
                {isRegisterLoading ? "Creating account" : "Register"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger">
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};
