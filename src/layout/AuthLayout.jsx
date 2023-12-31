import { Layout } from 'antd';
import { Outlet, } from 'react-router-dom';
import Header from '../components/Cms-components/Header';
import { Footer } from 'antd/lib/layout/layout';

const { Content } = Layout;
const AuthLayout = (props) => {

    return (
        <>
            <Layout>
                <Header />
                <Content footerStyle>
                    <Outlet>{props}</Outlet>
                </Content>
            </Layout>
        </>
    );
};

export default AuthLayout;