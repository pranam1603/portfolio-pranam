import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Copyright from '../components/copyright'
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
    <main style={{ backgroundColor: '#3a3e3b' }}>
      <Copyright />
    </main>
  </>
}

const Wrapper = styled.main`
  background: #caffcc;
  display: flex;
  width: 100vw;
  height: 93vh;
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
`

export default ErrorPage
