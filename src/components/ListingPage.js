import { Col } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ListingPage() {


    const [dataBox, setDataBox] = useState(null);

    const { id } = useParams();

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
    },[])

    return (
        <div>
            <Col span={24}>
                {
                    dataBox?.map((item, index) => (
                        <>
                            <Link to={`/single/${item.title}`}>
                                <h3 key={index}>{item.title}</h3>
                            </Link>
                            <hr />
                        </>
                    ))
                }
            </Col>
        </div>
    )
}
