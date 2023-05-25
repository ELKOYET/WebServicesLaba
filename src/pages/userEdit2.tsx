
import { useModel } from '@umijs/max';
import { request } from '@umijs/max';
import { Button, Form, Input, Select, Table } from 'antd';
import React from 'react';

export default function HomePage() {
  const [dataSource, setDatasourse] = React.useState([])
  const { name, setName } = useModel("useUserModel")

  const formNextHandler = (id: number) => {

  }




  return (
    <div>
      <div>
        Вы ввели имя  {name}
      </div>

      <Form layout='inline' >
        <Form.Item name="email">
          <Input placeholder='Почта' />
        </Form.Item>


        <Button type="primary" htmlType="submit" style={{ width: '135px' }}>Дальше</Button>
      </Form>

    </div>
  );
}
