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
        
            <video muted loop style={{ position: 'absolute', top: '0', left: '0',width:'100%',height:'100%',objectFit:'cover' }} autoPlay={true} controls={false}>
                <source src={vid} type="video/mp4" />
            </video>

            <Layout style={{ padding: "30px 30px", height: '100vh', background: 'transparent', position: 'relative', zIndex: '5' }}>
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