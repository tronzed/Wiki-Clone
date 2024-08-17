import React, { useEffect, useState } from 'react'

export default function DetailPage() {

    const [dataBox, setDataBox] = useState(null);

    const fetchDetail = async () => {

        const url = "https://en.wikipedia.org/w/api.php";

        const params = {
            action: "parse",
            page: "56400181",
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
