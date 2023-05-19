import { Link, Outlet } from 'umi';
import { Menu, MenuProps, Layout, Button, Form, Input, message } from 'antd';
import { useAccess } from '@umijs/max';
import { Access } from '@umijs/max';
import request from '@/utils/request';
import { useModel } from '@umijs/max';

const { Header, Content, Footer } = Layout;

//const MenuItems: MenuProps['items'] = 

export default () => {
  const { initialState, setInitialState, refresh } = useModel("@@initialState")
  const access = useAccess();

  const loginHandler = (data: any) => {
    request("https://localhost:44396/Auth/Login", { method: 'POST', data }).then((result: any) => {

        if(result.status == 0){
          localStorage.setItem('token', result.token);
      setInitialState({ a: 1 })
        }
        else{
          message.error("Ошибка авторизации")
        }
       
    })
  }

  const logOut = (data: any) => {
      localStorage.removeItem('token');
      setInitialState({ })
    }
  

  return (
    <>
      <Access accessible={access.isUser}> <Layout>
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
            items={[
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
                      <Link to="/Author/">Список</Link>
                    ),
                  },
                  {
                    key: 'diplomcreate',
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
                    key: 'directionlist',
                    label: (
                      <Link to="/Author/">Список</Link>
                    ),
                  },
                  {
                    key: 'directioncreate',
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
                    key: 'positionlist',
                    label: (
                      <Link to="/Author/">Список</Link>
                    ),
                  },
                  {
                    key: 'positioncreate',
                    label: (
                      <Link to="/Author/create">Создать</Link>
                    ),
                  }
                ]
              },

             /*  {
                key: 'auth',
                label: (
                  <Link to="/Auth/">Zaйти</Link>
                ),
              }, */
              
              {
                key: 'exit',
                label: (<span onClick={logOut}>СВОрачиваемся</span>) ,
              },
            ]}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ padding: '15px', margin: '10px' }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>веб лаба token: {localStorage.getItem('token')}</Footer>
      </Layout>
      </Access>

      <Access accessible={!access.isUser}>
        <Form layout='inline' onFinish={loginHandler} >
          <Form.Item name="login" >
            <Input placeholder='Логин' />
          </Form.Item>
          <Form.Item name="password" >
            <Input.Password placeholder='Пароль' />
          </Form.Item>

          <Button type="primary" htmlType="submit" style={{ width: '135px' }}>Zаходим</Button>
        </Form>
      </Access>
    </>
  );
}
