
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
    request(`https://localhost:44396/Position/${id}`, { method: 'DELETE' }).then(() => {
      const newDataSource = dataSource.filter((value: any, index) => value.id != id)
      setDatasourse(newDataSource);
    })
  }

 

  React.useEffect(() => {
    setLoad(true);
    request("https://localhost:44396/Position").then((x) => { setDatasourse(x); setLoad(false);  });
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
      title: 'Должность',
      dataIndex: 'name',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (value, record: any, index) => {
        return <>
          <div>
            <Link to={`/Position/edit/${record.id}`}>Редактрировать </Link>
            <a onClick={() => { removeHandler(record.id) }}>Удалить</a></div>
        </>
      }
    },
  ];

  return (
    <div> 
      <div>
        <Table dataSource={dataSource} columns={columns} rowKey={"id"} loading={load} style={{paddingTop:'25px'}} />
        <Link to={`/Position/create`}>
        <Button htmlType="submit" type="primary">Создать нового</Button>
        </Link>
      </div>
    </div>
  );
}