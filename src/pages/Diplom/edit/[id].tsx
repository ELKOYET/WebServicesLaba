import request from "@/utils/request";
import { useParams, history } from "@umijs/max";

import { Button, DatePicker, Form, Input, Select, Spin } from "antd";
import React from "react";
import moment from "moment";

const dateFormat = 'YYYY/MM/DD';

const EditPage = () => {
    const param = useParams()

    const [data, setData] = React.useState()

    React.useEffect(() => {
        request(`https://localhost:44396/Diplom/${param.id}`).then((x) => { setData(x); });
    }, []);


    const editHandler = (data: any) => {
        console.log(data);
        request(`https://localhost:44396/Diplom/${param.id}`, { method: 'POST', data })
            .then(() => {
                history.push('/Diplom/')
            })
    }
    return (
        <div>
            {data ?
                <Form onFinish={editHandler} initialValues={data} >
                    <Form.Item name="title">
                        <Input placeholder="Название работы"></Input>
                    </Form.Item>

                    <Form.Item name="release" valuePropName={'release'}>
                         <DatePicker defaultValue={moment(data.release)} />
                    </Form.Item>

                    <Form.Item name="headName">
                        <Input placeholder="Полное название"></Input>
                    </Form.Item>

                    <Form.Item name="directionId">
                        <Input placeholder="Направление работы"></Input>
                    </Form.Item>

                    <Form.Item name="academicDegree">
                        <Select options={[
                            { value: 0, label: 'Bachelor' },
                            { value: 1, label: 'Magister' },
                            { value: 2, label: 'Aspirant' },
                            { value: 3, label: 'Candidat' },
                            { value: 4, label: 'Specialist' },
                            { value: 5, label: 'Doctor' },
                        ]}
                        />
                    </Form.Item>

                    <Form.Item name="authorId">
                        <Input placeholder="АвторАйди"></Input>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Изменить</Button>
                </Form> : <Spin></Spin>
            }
        </div>
    )
}

export default EditPage;