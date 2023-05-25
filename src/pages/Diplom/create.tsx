import request from "@/utils/request";
import { history } from "@umijs/max";
import { Button, DatePicker, Form, Input, Select } from "antd";


const CreatePage = () => {


    const createHandler = (data: any) => {
        request(`https://localhost:44396/Diplom/`, { method: 'PUT', data })
            .then(() => {
                history.push('/Diplom/')
            })
    }
    return (
        <div>

            <Form onFinish={createHandler}  >
            <Form.Item name="title">
                        <Input placeholder="Название работы"></Input>
                    </Form.Item>

                    <Form.Item name="release">
                       <DatePicker/>
                    </Form.Item>

                    <Form.Item name="headName">
                        <Input placeholder="Полное название"></Input>
                    </Form.Item>

                    <Form.Item name="directionId">
                        <Input placeholder="Направление работы"></Input>
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

                    <Form.Item name="authorId">
                        <Input placeholder="АвторАйди"></Input>
                    </Form.Item>


                    
                <Button htmlType="submit" type="primary">Добавить</Button>
            </Form>
        </div>
    )
}

export default CreatePage;