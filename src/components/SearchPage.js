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
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <div style={{ maxWidth: '600px' }}>
                                <div style={{ maxWidth: '200px', margin: 'auto auto 20px' }}>
                                    <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />
                                </div>
                                <Form onFinish={onFinish}>
                                    <Flex gap={5}>
                                        <Form.Item name='text'>
                                            <Input size='large' placeholder="Search your topic" />
                                        </Form.Item>
                                        <Button htmlType='submit' size='large' type="primary">Submit</Button>
                                    </Flex>
                                </Form>
                            </div>
                        </Col>

                    </Row>
                </Flex>
            </Layout>
        </>
    )
}