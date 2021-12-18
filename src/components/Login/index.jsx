import "./Login.css"
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";

function Login() {
    const onFinish = (values) => {
        axios.post("http://localhost:9000/login", {

        })
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <label style={{"fontSize": "30px",}}>Login</label>
            <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{"paddingTop": "30px"}}
            >
                
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
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 6 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                    <a href="/register"><label style={{"padding": "15px 0 0 20px", "textDecoration": "underline", "cursor": "pointer"}}>Haven't created an account? click here</label></a>
                </Form.Item>
            </Form>
            </>
    );
};

export default Login;