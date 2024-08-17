import { Button, Col, Form, Input, Layout, Row } from 'antd';
import React, { useState } from 'react'

export default function SearchPage() {

    const [dataBox, setDataBox] = useState(null);

    const searchNow = async (text) => {

        const url = 'https://en.wikipedia.org/w/api.php';

        const params = {
            action: "query",
            list: "search",
            srsearch: text,
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

    return (
        <>
            <Layout style={{ padding: "30px 30px" }}>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <Form>
                            <Input onChange={(e)=> searchNow(e.currentTarget.value)} size='large' placeholder="Basic usage" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col span={24}>
                        {
                            dataBox?.map((item, index) => (
                                <>
                                    <h3 key={index}>{item.title}</h3>
                                    <hr />
                                </>
                            ))
                        }
                    </Col>
                </Row>
            </Layout>

        </>
    )
}
