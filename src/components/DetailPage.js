import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailPage() {

    const [dataBox, setDataBox] = useState(null);

    const {id} = useParams();

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
        <div>
            <div dangerouslySetInnerHTML={{ __html: dataBox }}></div>
        </div>
    )
}
