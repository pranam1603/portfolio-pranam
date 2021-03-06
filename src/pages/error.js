import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiRobotGolem } from "react-icons/gi";

const ErrorPage = () => {
  return <>
    <Wrapper className="page-100">
      <section>
        <h1><GiRobotGolem style={{ color: '#426838' }} /> 404</h1>
        <h3>Sorry! the page you tried cannot be found</h3>
        <Link className="btn" to="/">
          Back to home
        </Link>
      </section>
    </Wrapper>
  </>
}

const Wrapper = styled.main`
  background: #caffcc;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }

  @media (max-width:600px){
    h1{
      font-size:7rem
    }
    h3{
      letter-spacing: 0;
    }

    overflow:hidden;
  }
`

export default ErrorPage
