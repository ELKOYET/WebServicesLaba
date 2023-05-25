
import request from '@/utils/request';
import { Pie } from '@ant-design/charts';
import { useModel } from '@umijs/max';
import { Link } from '@umijs/max';
import { Button, Form, Input, Select } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react';

export default function HomePage() {
  const { initialState } = useModel("@@initialState")
  const [dataSource, setDatasourse] = React.useState([])
  const [load, setLoad] = React.useState(false)
  const [dataChart, setDataChart] = React.useState([]);

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
    request("https://localhost:44396/Author").then((x) => { setDatasourse(x); setLoad(false);  });
    request("https://localhost:44396/Author/GetPieChart").then(result => {setDataChart(result)});
  }, []);


  const config = {
    appendPadding: 10,
    data: dataChart,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} ',
    },
    interactions: [
      {
        type: 'element-highlight',
      },
      {
        type: 'element-active',
      },
      {
        type: 'legend-highlight'
      }
    ],
  };



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
      dataIndex: 'position',
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
        <Button type="primary" htmlType="submit" style={{width:'135px'}}>Найти</Button>
      </Form>
      <div>
        <Table dataSource={dataSource} columns={columns} rowKey={"id"} loading={load} style={{paddingTop:'25px'}} />
        <Link to={`/Author/create`}>
        <Button htmlType="submit" type="primary">Создать нового</Button>
        </Link>
        <Pie {...config} />;
      </div>
    </div>
  );
}