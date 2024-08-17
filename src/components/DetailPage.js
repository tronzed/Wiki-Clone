import { Button, Divider, Flex } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.png'

export default function DetailPage() {

    const [dataBox, setDataBox] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchDetail = async () => {

        const url = "https://en.wikipedia.org/w/api.php";

        const params = {
            action: "parse",
            page: id,
            format: "json",
            origin: "*",
        }

        const queryString = new URLSearchParams(params).toString();
        const api = `${url}?${queryString}`;
        const res = await fetch(api);
        const data = await res.json();
        console.log(data)
        setDataBox(data?.parse?.text['*']);
    }

    useEffect(() => {
        fetchDetail()
    }, []);

    return (
        <div style={{ padding: '10px 30px', maxWidth: '1170px', margin: 'auto' }}>
            <Flex justify="space-between" align='center'>
                <div style={{ maxWidth: '100px' }}>
                    <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />

                </div>
                <Button onClick={() => navigate('/')}>Back</Button>
            </Flex>
            <Divider />
            <div dangerouslySetInnerHTML={{ __html: dataBox }}></div>

        </div>
    )
}
