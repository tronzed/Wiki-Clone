import { Button, Col, Flex, Form, Input, Layout, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'

export default function SearchPage() {

    const navigate = useNavigate();

    const onFinish = (data) => {
        console.log(data)
        navigate(`/listing/${data.text}`);
    }

    return (
        <>
            <Layout style={{ padding: "30px 30px", height: '100vh' }}>
                <Flex justify='center' align='center' style={{ height: '70vh' }}>
                    <div style={{ maxWidth: '500px', width: '100%' }}>
                        <div style={{ maxWidth: '200px', margin: 'auto auto 20px' }}>
                            <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />
                        </div>
                        <Form onFinish={onFinish}>

                            <Row gutter={[10, 5]}>
                                <Col flex={'auto'} >
                                    <Form.Item name='text'>
                                        <Input size='large' placeholder="Search your topic" />
                                    </Form.Item>
                                </Col>
                                <Col flex={'120px'}>
                                    <Button htmlType='submit' size='large' type="primary">Search</Button>
                                </Col>
                            </Row>

                        </Form>
                    </div>

                </Flex>
            </Layout>
        </>
    )
}