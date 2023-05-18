import { Link, request } from '@umijs/max';
import { Button, Form, Input, Select } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react';

export default function HomePage() {
  const [dataSource, setDatasourse] = React.useState([])
  const [load, setLoad] = React.useState(false)

  const removeHandler = (id: number) => {
    request(`https://localhost:44396/Author/${id}`, { method: 'DELETE' }).then(() => {
      const newDataSource = dataSource.filter((value: any, index) => value.id != id)
      setDatasourse(newDataSource);
    })
  }


  const searchSecondNameHandler = (data: any) => {
    setLoad(true)
    request(`https://localhost:44396/Author/Index`, { method: 'POST', data }).then(result => { setDatasourse(result); setLoad(false) })
  }


  React.useEffect(() => {
    setLoad(true);
    request("https://localhost:44396/Author").then((x) => { setDatasourse(x); setLoad(false); });
  }, []);

  const columns: ColumnsType<never> = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
    },
    {
      title: 'SecondName',
      dataIndex: 'secondName',
    },
    {
      title: 'ThirdName',
      dataIndex: 'thirdName',
    },
    {
      title: 'FIO',
      dataIndex: 'fio',
    },
    {
      title: 'shortFIO',
      dataIndex: 'shortFIO',
    },
    {
      title: 'Position',
      dataIndex: 'positionId',
    },
    {
      title: 'academicDegree',
      dataIndex: 'academicDegree',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (value, record: any, index) => {
        return <>
          <div>
            <Link to={`/Author/edit/${record.id}`}>Редактрировать </Link>
            <a onClick={() => { removeHandler(record.id) }}>Удалить</a></div>
        </>
      }
    },
  ];

  return (
    <div>
      <Form layout='inline' onFinish={searchSecondNameHandler}>
        <Form.Item name="secondName" label="Поиск по фамилии">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">Найти</Button>
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
      </Form>

      <div>
        <Table dataSource={dataSource} columns={columns} rowKey={"id"} loading={load} />
        <Link to={`/Author/create`}>Перейти к созданию</Link>
      </div>
    </div>


  );
}