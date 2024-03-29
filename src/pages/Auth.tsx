
import request from '@/utils/request';
import { useModel } from '@umijs/max';
import { Button, Form, Input, Select, message } from 'antd';
import React from 'react';

export default function HomePage() {
    const { refresh } = useModel("@@initialState")
    const loginHandler = (data: any) => {
        request("https://localhost:44396/Auth/Login", { method: 'POST', data }).then((result: any) => {
            localStorage.setItem('token', result.token);
            if (result.status == 0) {
                localStorage.setItem('token', result.token);
                refresh();
              }
              else {
                message.error("Ошибка авторизации")
              }
        })
    }


    return (
        <div>
            <Form layout='inline' onFinish={loginHandler} >
                <Form.Item name="login" >
                    <Input placeholder='Логин' />
                </Form.Item>
                <Form.Item name="password" >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>

                <Button type="primary" htmlType="submit" style={{ width: '135px' }}>Zаходим</Button>
            </Form>
        </div>
    );
}  