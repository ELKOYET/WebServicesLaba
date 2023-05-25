import request from "@/utils/request";
import { useParams, history } from "@umijs/max";

import { Button, Form, Input, Select, Spin } from "antd";
import React from "react";


const EditPage = () => {
    const param = useParams()

    const [data, setData] = React.useState()

    React.useEffect(() => {
        request(`https://localhost:44396/Position/${param.id}`).then((x) => { setData(x) });
    }, []);

    const editHandler = (data: any) => {
        console.log(data);
        request(`https://localhost:44396/Position/${param.id}`, { method: 'POST', data })
            .then(() => {
                history.push('/Position/')
            })
    }
    return (
        <div>
            {data ?
                <Form onFinish={editHandler} initialValues={data} >
                    <Form.Item name="name">
                        <Input placeholder="Должность"></Input>
                    </Form.Item>

                    <Button htmlType="submit" type="primary">Изменить</Button>
                </Form> : <Spin></Spin>
            }
        </div>
    )
}

export default EditPage;