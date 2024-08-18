import { Button, Divider, Flex } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo2.png'
import { LoadingOutlined } from '@ant-design/icons';

export default function DetailPage() {

    const [dataBox, setDataBox] = useState(null);
    const { id } = useParams();
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    // const allLinks = document.querySelectorAll('a')

    // for (let i = 0; i < allLinks.length; i++) {
    //     allLinks[i].addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let link = allLinks[i].getAttribute('title');
    //         navigate(`/listing/${link}`);
    //         console.log('link-->', link)
    //     });
    // }

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
        setDataBox(data?.parse?.text['*']);
        setLoader(false)
    }

    useEffect(() => {
        fetchDetail()
    }, []);

    return (
        <>

            <div style={{ padding: '10px 30px', maxWidth: '1170px', margin: 'auto' }}>
                <Flex justify="space-between" align='center'>
                    <div style={{ maxWidth: '170px' }}>
                        <Link to="/">
                            <img style={{ maxWidth: '100%' }} src={logo} alt='logo' />
                        </Link>
                    </div>
                    <Button onClick={() => navigate('/')}>Back</Button>
                </Flex>
            </div>
            <Divider />

            <div style={{ padding: '10px 30px', maxWidth: '1170px', margin: 'auto' }}>

                {loader && (
                    <Flex justify='center' align='center' style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', background: '#fff', opacity: '0.8', zIndex: '5' }}>
                        <LoadingOutlined style={{ fontSize: '50px' }} />
                    </Flex>
                )}


                <div dangerouslySetInnerHTML={{ __html: dataBox }}></div>

            </div>
        </>
    )
}
