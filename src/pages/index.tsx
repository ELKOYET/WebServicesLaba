import { Link } from '@umijs/max';
import { request } from '@umijs/max';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

export default function HomePage() {
  const [dataSource, setDatasourse] = React.useState([])

  const removeHandler = (id : number) => {
    request(`https://localhost:44396/Author/${id}`, {method: 'DELETE'}).then(answer => {
      const newDataSource = dataSource.filter((value, index ) => value.id != id)
    })
  }

  React.useEffect(() => {
    request("https://localhost:44396/Author").then((x) => { console.log(x); setDatasourse(x) });
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
      render: (value, record, index) => {
        return <>
        <div>
        <Link to={`/Author/edit/${record.id}`}>Редактрировать</Link>
          <a onClick={() => {removeHandler(record.id) }}>Удалить</a></div>       
        </>;
      }
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey={"id"}/>;
      
    </div>
  );
}
