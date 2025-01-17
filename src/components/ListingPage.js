import { Button, Card, Divider, Flex, List } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo2.png'
import no_result from '../images/no_result.jpg'
import { LoadingOutlined } from '@ant-design/icons';

export default function ListingPage() {


    const [dataBox, setDataBox] = useState(null);
    const [suggestion, setSuggestion] = useState(null);
    const [loader, setLoader] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    const searchNow = async () => {
        const url = 'https://en.wikipedia.org/w/api.php';
        const params = {
            action: "query",
            list: "search",
            srsearch: id,
            format: "json",
            origin: "*", // To avoid CORS issues
        };
        const queryString = new URLSearchParams(params).toString();
        const api = `${url}?${queryString}`
        const res = await fetch(api);
        const data = await res.json()
        console.log(data)
        setDataBox(data?.query?.search)
        setSuggestion(data?.query.searchinfo.suggestion)
        setLoader(false)
    }

    const notFound = (data) => {
        navigate(`/listing/${data}`);
        window.location.reload();
    }

    useEffect(() => {
        searchNow()
    }, [])

    return (
        <>
            <div style={{ padding: '10px 30px', maxWidth: '1170px', margin: 'auto' }}>

                {loader && (
                    <Flex justify='center' align='center' style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', background: '#fff', opacity: '0.8', zIndex: '5' }}>
                        <LoadingOutlined style={{ fontSize: '50px' }} />
                    </Flex>
                )}

                <Flex justify="space-between" align='center'>
                    <div style={{ maxWidth: '170px' }}>
                        <Link to="/">
                            <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />
                        </Link>
                    </div>
                    <Button onClick={() => navigate('/')}>Back</Button>
                </Flex>
                <Divider />

                {!dataBox?.length && (
                    <>

                        {suggestion && (
                            <Flex justify='center'>
                                <h4>Do you mean: <Button onClick={() => notFound(suggestion)}>{suggestion}</Button></h4>
                            </Flex>
                        )}

                        <Flex justify='center'>
                            <img style={{ maxWidth: '100%' }} src={no_result} alt='logo' />
                        </Flex>
                    </>
                )}

                {console.log(dataBox?.query?.search)}

                <List>
                    {
                        dataBox?.map((item, index) => (
                            <>
                                <List.Item>
                                    <Link style={{ width: '100%' }} to={`/single/${item.title}`}>
                                        <Card>
                                            <div>
                                                <h3 style={{ margin: '0' }} key={index}>{item.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: item.snippet }}></div>
                                            </div>
                                        </Card>
                                    </Link>
                                </List.Item>
                            </>
                        ))
                    }
                </List>
            </div>
        </>
    )
}
