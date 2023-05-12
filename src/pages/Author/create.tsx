import { request, history } from "@umijs/max";
import { Button, Form, Input, Select } from "antd";


const CreatePage = () => {


    const createHandler = (data: any) => {
        console.log(data);
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
                <Button htmlType="submit" type="primary">Добавить</Button>
            </Form>
        </div>
    )
}

export default CreatePage;