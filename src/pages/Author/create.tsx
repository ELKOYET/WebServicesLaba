import request from "@/utils/request";
import { history } from "@umijs/max";
import { Button, Form, Input, Select } from "antd";


const CreatePage = () => {


    const createHandler = (data: any) => {
        request(`https://localhost:44396/Author/`, { method: 'PUT', data })
            .then(() => {
                history.push('/Author/')
            })
    }
    return (
        <div>

            <Form onFinish={createHandler}  >
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
                    <Select allowClear options={[
                        { value: 0, label: 'Bachelor' },
                        { value: 1, label: 'Magister' },
                        { value: 2, label: 'Aspirant' },
                        { value: 3, label: 'Candidat' },
                        { value: 4, label: 'Specialist' },
                        { value: 5, label: 'Doctor' },
                    ]}
                        defaultValue={0}
                    />
                </Form.Item>
                <Button htmlType="submit" type="primary">Добавить</Button>
            </Form>
        </div>
    )
}

export default CreatePage;