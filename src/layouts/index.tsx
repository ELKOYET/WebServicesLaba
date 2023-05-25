import { Link, Outlet } from 'umi';
import { Menu, MenuProps, Layout, Button, Form, Input, message } from 'antd';
import { useAccess } from '@umijs/max';
import { Access } from '@umijs/max';
import request from '@/utils/request';
import { useModel } from '@umijs/max';

const { Header, Content, Footer } = Layout;

export default () => {

  const { initialState, setInitialState, refresh } = useModel("@@initialState")
  const access = useAccess();

  const loginHandler = (data: any) => {
    request("https://localhost:44396/Auth/Login", { method: 'POST', data }).then((result: any) => {

      if (result.status == 0) {
        localStorage.setItem('token', result.token);
        refresh();
      }
      else {
        message.error("Ошибка авторизации")
      }

    })
  }
  const logOut = (data: any) => {
    localStorage.removeItem('token');
    setInitialState({})
  }

  const MenuItems: MenuProps['items'] = [
    {
      key: 'author',
      label: 'Авторы',
      children: [
        {
          key: 'authorlist',
          label: (
            <Link to="/Author/">Список</Link>
          ),
        },
        {
          key: 'authorcreate',
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
          key: 'diplomlist',
          label: (
            <Link to="/Diplom/">Список</Link>
          ),
        },
        {
          key: 'diplomcreate',
          label: (
            <Link to="/Diplom/create">Создать</Link>
          ),
        }
      ],
    },

    {
      key: 'direction',
      label: 'Направления',
      children: [
        {
          key: 'directionlist',
          label: (
            <Link to="/Direction/">Список</Link>
          ),
        },
        {
          key: 'directioncreate',
          label: (
            <Link to="/Direction/create">Создать</Link>
          ),
        }
      ],
    },

    {
      key: 'position',
      label: 'Позиции',
      children: [
        {
          key: 'positionlist',
          label: (
            <Link to="/Position/">Список</Link>
          ),
        },
        {
          key: 'positioncreate',
          label: (
            <Link to="/Position/create">Создать</Link>
          ),
        }
      ]
    },
    {
      key: 'userEdit',
      label: (
        <Link to="/userEdit/">Редач юзера</Link>
      ),
    },
    {
      key: 'exit',
      label: (<span onClick={logOut}>Vыйти</span>),
    },


  ]

  return (
    <>
      <Access accessible={access.isUser}>
        <Layout >
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
            <div style={{ padding: '15px', margin: '10px' }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ЗДАРОВА</Footer>
        </Layout>
      </Access>

      <Access accessible={!access.isUser}>
        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}>
            <Menu
              theme="dark"
              mode="horizontal"
              items={[
                {
                  key: 'auth',
                  label: (
                    <Link to="/Auth/">Zайти</Link>
                  ),

                },
                {
                  key: 'register',
                  label: (
                    <Link to="/register/">Zaрегаться</Link>
                  ),

                }
              ]}
            />

          </Header>
          <Content style={{ padding: '0 50px', textAlign: 'center' }}>
            <div style={{ padding: '15px', margin: '10px' }}>
                <Outlet></Outlet>
            </div>
          </Content>
        </Layout>


      </Access>
    </>
  );
}
