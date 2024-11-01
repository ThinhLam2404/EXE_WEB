import React, { useState } from "react";
import { Form, Input, Select, Button, Typography } from "antd";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const { Title, Text } = Typography;

function Calculate() {
  const [calories, setCalories] = useState(null);
  const [display, setDisplay] = useState(false);
  const [width, setWidth] = useState("800px");
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
    setWidth("300px");
  };

  // Dữ liệu cho biểu đồ tròn
  const data = [
    { name: "Cookie", value: 49.3 },
    { name: "Remaining", value: calories ? calories - 49.3 : 0 },

    // { name: "Carbs", value: 50 },
    // { name: "Protein", value: 30 },
    // { name: "Fat", value: 20 },
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
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          maxWidth: "900px",
        }}
      >
        {/* Form */}
        <div
          style={{
            padding: "30px",
            width: "50%",
            minWidth: width,
            backgroundColor: "#ffffffcc",
          }}
        >
          <Title level={2} style={{ color: "#4a5568" }}>
            Calorie Calculator
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
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please enter your age" }]}
            >
              <Input type="number" placeholder="Enter age" />
            </Form.Item>

            <Form.Item
              label="Weight (kg)"
              name="weight"
              rules={[{ required: true, message: "Please enter your weight" }]}
            >
              <Input type="number" placeholder="Enter weight in kg" />
            </Form.Item>

            <Form.Item
              label="Height (cm)"
              name="height"
              rules={[{ required: true, message: "Please enter your height" }]}
            >
              <Input type="number" placeholder="Enter height in cm" />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Activity Level" name="activity">
              <Select>
                <Select.Option value={1.2}>
                  Sedentary (little or no exercise)
                </Select.Option>
                <Select.Option value={1.375}>
                  Lightly active (light exercise 1-3 days/week)
                </Select.Option>
                <Select.Option value={1.55}>
                  Moderately active (moderate exercise 3-5 days/week)
                </Select.Option>
                <Select.Option value={1.725}>
                  Very active (hard exercise 6-7 days/week)
                </Select.Option>
                <Select.Option value={1.9}>
                  Super active (very hard exercise, physical job)
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
                Calculate
              </Button>
            </Form.Item>
          </Form>

          {calories !== null && (
            <Text strong style={{ fontSize: "18px", color: "#2d3748" }}>
              Daily Caloric Needs: {calories} kcal
            </Text>
          )}
        </div>

        {/* Content bên phải với hình nền, lớp phủ và biểu đồ tròn */}
        {display ? (
          <div
            style={{
              position: "relative",
              padding: "30px",
              width: "50%",
              backgroundImage:
                'url("https://giontan.vn/wp-content/uploads/2023/06/Bis-cam-720x720-1.jpg")', // Thay URL với ảnh nền của bạn
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Lớp phủ trắng với opacity */}
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

            {/* Biểu đồ tròn bên trên lớp phủ */}
            <div
              style={{ position: "relative", zIndex: 2, textAlign: "center" }}
            >
              <Title level={3} style={{ color: "#4a5568" }}>
                Nutrient Distribution
              </Title>
              <PieChart width={400} height={400} style={{ margin: "auto" }}>
                <Pie
                  data={data}
                  cx="50%"
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

              <Text style={{ color: "#2d3748", fontSize: "15px" }}>
                {/* This chart represents the recommended nutrient distribution for
              daily caloric intake. */}
                One cookie accounts for about{" "}
                {Math.round((49.3 * 100) / calories)} % of your total daily
                calories
              </Text>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Calculate;
