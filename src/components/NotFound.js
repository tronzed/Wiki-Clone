import { Button, Flex } from 'antd'
import React from 'react'

import img from '../images/404.jpg'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <>

      <Flex justify='center' align='center' style={{ width: '100%', height: '100vh', background: '#fff' }}>
        <div style={{maxWidth:'450px',textAlign:'center'}}>
          <img style={{maxWidth:'100%'}} src={img} alt="404" />
          <Button onClick={() => navigate('/')}>Go Back</Button>
        </div>
      </Flex>

    </>
  )
}
