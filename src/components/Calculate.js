import React, { useState } from "react";
import { Form, Input, Select, Button, Typography, Row, Col } from "antd";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../assets/css/calculate.css";
import imgChart1 from "../assets/images/cookieChart1.jpg";
import imgChart2 from "../assets/images/cookieChart2.jpg";
import imgChart3 from "../assets/images/cookieChart3.jpg";

const { Title, Text } = Typography;

function Calculate() {
  const [calories, setCalories] = useState(null);
  const [display, setDisplay] = useState(false);

  const calculateCalories = (values) => {
    const { age, weight, height, gender, activity } = values;

    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const tdee = bmr * activity;
    setCalories(Math.round(tdee));
    setDisplay(true);
  };

  const data = [
    { name: "Lượng calo của bánh", value: 49.3 },
    { name: "Lượng calo còn lại", value: calories ? calories - 49.3 : 0 },
  ];

  const COLORS = ["#82ca9d", "#F86C22", "#ffc658"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Row
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <Col
          xs={24}
          md={12}
          style={{
            padding: "30px",
            backgroundColor: "#ffffffcc",
          }}
        >
          <Title level={2} style={{ color: "#4a5568" }}>
            Công cụ tính calo
          </Title>

          <Form
            layout="vertical"
            onFinish={calculateCalories}
            initialValues={{
              gender: "male",
              activity: 1.2,
            }}
          >
            <Form.Item
              label="Tuổi"
              name="age"
              rules={[
                { required: true, message: "Vui lòng nhập tuổi của bạn" },
              ]}
            >
              <Input type="number" placeholder="Nhập tuổi của bạn" />
            </Form.Item>

            <Form.Item
              label="Cân nặng (kg)"
              name="weight"
              rules={[
                { required: true, message: "Vui lòng nhập cân nặng của bạn" },
              ]}
            >
              <Input type="number" placeholder="Nhập cân nặng của bạn(kg)" />
            </Form.Item>

            <Form.Item
              label="Chiều cao (cm)"
              name="height"
              rules={[
                { required: true, message: "Vui lòng nhập chiều cao của bạn" },
              ]}
            >
              <Input type="number" placeholder="Nhập chiều cao của bạn(cm)" />
            </Form.Item>

            <Form.Item label="Giới tính" name="gender">
              <Select>
                <Select.Option value="male">Nam</Select.Option>
                <Select.Option value="female">Nữ</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Cường độ tập luyện" name="activity">
              <Select>
                <Select.Option value={1.2}>
                  Ít vận động (ít hoặc không tập thể dục)
                </Select.Option>
                <Select.Option value={1.375}>
                  Vận động nhẹ (tập nhẹ 1-3 ngày/tuần)
                </Select.Option>
                <Select.Option value={1.55}>
                  Hoạt động vừa phải (tập thể dục vừa phải 3-5 ngày/tuần)
                </Select.Option>
                <Select.Option value={1.725}>
                  Rất năng động (tập nặng 6-7 ngày/tuần)
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#4299e1",
                  borderColor: "#4299e1",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  width: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3182ce")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4299e1")
                }
              >
                Tính
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {display && (
          <Col
            xs={24}
            md={12}
            style={{
              position: "relative",
              padding: "30px",
              backgroundImage: `url(${imgChart1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{ position: "relative", zIndex: 2, textAlign: "center" }}
            >
              <Title level={3} style={{ color: "#4a5568" }}>
                Phân phối dinh dưỡng
              </Title>
              <PieChart width={310} height={300} style={{ margin: "auto" }}>
                <Pie
                  data={data}
                  cx="53%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
              <Text strong style={{ fontSize: "18px", color: "#2d3748" }}>
                Nhu cầu calo hàng ngày: {calories} calo
              </Text>
              <br />
              <Text style={{ color: "#2d3748", fontSize: "15px" }}>
                Một cái bánh chứa 49.3 calo và chiếm khoảng{" "}
                {Math.round((49.3 * 100) / calories)}% của tổng lượng calo hàng
                ngày của bạn
              </Text>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Calculate;
