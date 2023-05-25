import request from "@/utils/request";
import { history } from "@umijs/max";
import { Button, Form, Input, Select } from "antd";


const CreatePage = () => {


    const createHandler = (data: any) => {
        request(`https://localhost:44396/Position/`, { method: 'PUT', data })
            .then(() => {
                history.push('/Position/')
            })
    }
    return (
        <div>

            <Form onFinish={createHandler}  >
                <Form.Item name="name">
                    <Input placeholder="Должность"></Input>
                </Form.Item>

                
                <Button htmlType="submit" type="primary">Добавить</Button>
            </Form>
        </div>
    )
}

export default CreatePage;