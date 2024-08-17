import { Button, Col, Flex, Form, Input, Layout, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import vid from '../images/bg_02.mp4'

export default function SearchPage() {

    const navigate = useNavigate();

    const onFinish = (data) => {
        console.log(data)
        navigate(`/listing/${data.text}`);
    }

    return (
        <>

            <Flex justify='center' align='center' style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', background: '#000', opacity: '0.45', zIndex: '5' }}>
            x
            </Flex>

            <video muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} autoPlay={true} controls={false}>
                <source src={vid} type="video/mp4" />
            </video>

            <Layout style={{ padding: "30px 30px", height: '100vh', background: 'transparent', position: 'relative', zIndex: '5' }}>
                <Flex justify='center' align='center' style={{ height: '70vh' }}>
                    <div style={{ maxWidth: '500px', width: '100%' }}>
                        <div style={{ maxWidth: '200px', margin: 'auto auto 40px' }}>
                            <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />
                        </div>
                        <Form onFinish={onFinish}>
                            <Row gutter={[10, 5]}>
                                <Col xl={20} sm={20} xs={24} >
                                    <Form.Item name='text'>
                                        <Input block size='large' placeholder="Search your topic" />
                                    </Form.Item>
                                </Col>
                                <Col xl={4} sm={4} xs={24}>
                                    <Button block htmlType='submit' size='large' type="primary">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Flex>
            </Layout>
        </>
    )
}