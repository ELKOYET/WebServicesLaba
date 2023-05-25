
import { useModel, history } from '@umijs/max';
import { Button, Form, Input, Select, Table } from 'antd';

const userEditPage =  () =>  {

 const { name, setName } = useModel("useUserModel")

  const formNextHandler = (data : any) => {
    setName(data.name);
    history.push("/userEdit2")
    
  }

  return (
    <div>
      <Form layout='inline' onFinish={formNextHandler} >
        <Form.Item name="name" >
          <Input placeholder='Имя' />
        </Form.Item>

         
        <Button type="primary" htmlType="submit" style={{ width: '135px' }}>Дальше</Button>
      </Form>

    </div>
  );
}

export default userEditPage
