import request from "@/utils/request";
import { useParams, history } from "@umijs/max";

import { Button, Form, Input, Select, Spin } from "antd";
import React from "react";


const EditPage = () => {
    const param = useParams()

    const [data, setData] = React.useState()

    React.useEffect(() => {
        request(`https://localhost:44396/Author/${param.id}`).then((x) => { setData(x) });
    }, []);

    const editHandler = (data: any) => {
        console.log(data);
        request(`https://localhost:44396/Author/${param.id}`, { method: 'POST', data })
            .then(() => {
                history.push('/Author/')
            })
    }
    return (
        <div>
            {data ?
                <Form onFinish={editHandler} initialValues={data} >
                    <Form.Item name="firstName">
                        <Input placeholder="Имя"></Input>
                    </Form.Item>

                    <Form.Item name="secondName">
                        <Input placeholder="Фамилия"></Input>
                    </Form.Item>

                    <Form.Item name="thirdName">
                        <Input placeholder="Отчество"></Input>
                    </Form.Item>

                    <Form.Item name="positionId">
                        <Input placeholder="Должность"></Input>
                    </Form.Item>

                    <Form.Item name="academicDegree">
                        <Select options={[
                            { value: 1, label: 'Bachelor' },
                            { value: 2, label: 'Magister' },
                            { value: 3, label: 'Aspirant' },
                            { value: 4, label: 'Candidat' },
                            { value: 5, label: 'Specialist' },
                            { value: 6, label: 'Doctor' },
                        ]}
                            defaultValue={1}
                        />
                    </Form.Item>

                    <Button htmlType="submit" type="primary">Изменить</Button>
                </Form> : <Spin></Spin>
            }
        </div>
    )
}

export default EditPage;