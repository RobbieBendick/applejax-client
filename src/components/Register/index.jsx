import "./Register.css"
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";

function Register() {
    const onFinish = (values) => {
        console.log("worked!", values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{"paddingTop": "30px"}}
            action="/register"
            method="POST"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: false, message: 'Please input your email!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }, {pattern: /^[a-zA-Z0-9]+$/, message: 'Name can only include letters and numbers.',}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                <a href="/login"><label style={{"padding": "15px 0 0 20px", "textDecoration": "underline", "cursor": "pointer"}}>Already have an account? click here</label></a>
                </Form.Item>
            </Form>
    );
};

export default Register;