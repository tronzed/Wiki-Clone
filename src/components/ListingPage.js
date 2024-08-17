import { Button, Divider, Flex, List } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.png'

export default function ListingPage() {


    const [dataBox, setDataBox] = useState(null);

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
    }

    useEffect(() => {
        searchNow()
    }, [])

    return (
        <>
            <div style={{ padding: '10px 30px', maxWidth: '1170px', margin: 'auto' }}>

                <Flex justify="space-between" align='center'>
                    <div style={{ maxWidth: '100px' }}>
                        <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />

                    </div>
                    <Button onClick={()=> navigate('/')}>Back</Button>
                </Flex>
                <Divider />
                <List>
                    {
                        dataBox?.map((item, index) => (
                            <>
                                <List.Item>
                                    <div>
                                        <Link to={`/single/${item.title}`}>
                                            <h3 style={{ margin: '0' }} key={index}>{item.title}</h3>
                                        </Link>
                                        <div dangerouslySetInnerHTML={{ __html: item.snippet }}></div>
                                    </div>
                                </List.Item>
                            </>
                        ))
                    }
                </List>
            </div>
        </>
    )
}
