import { Link, Outlet } from 'umi';
import { Menu, MenuProps, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const MenuItems: MenuProps['items'] = [
  {
    key: 'author',
    label: 'Авторы',
    children: [
      {
        key: 'list',
        label: (
          <Link to="/Author/">Список</Link>
        ),
      },
      {
        key: 'create',
        label: (
          <Link to="/Author/create">Создать</Link>
        ),
      }
    ],
  },

  {
    key: 'diplom',
    label: 'Работы',
    children: [
      {
        key: 'list',
        label: (
          <Link to="/Author/">Список</Link>
        ),
      },
      {
        key: 'create',
        label: (
          <Link to="/Author/create">Создать</Link>
        ),
      }
    ],
  },

  {
    key: 'direction',
    label: 'Направления',
    children: [
      {
        key: 'list',
        label: (
          <Link to="/Author/">Список</Link>
        ),
      },
      {
        key: 'create',
        label: (
          <Link to="/Author/create">Создать</Link>
        ),
      }
    ],
  },

  {
    key: 'position',
    label: 'Позиции',
    children: [
      {
        key: 'list',
        label: (
          <Link to="/Author/">Список</Link>
        ),
      },
      {
        key: 'create',
        label: (
          <Link to="/Author/create">Создать</Link>
        ),
      }
    ]
  },
];

export default () =>  {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div />
        <Menu
          theme="dark"
          mode="horizontal"
          items={MenuItems}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div> 
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ебучая лаба</Footer>
    </Layout>
  );
}
