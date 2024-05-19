import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(135deg, #3a4c7e, #724fad);

  width: 100%;
  min-height: 100vh;
  height: 100%;
`
export const CardTodo = styled.section`
  width: 60%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
  }
`
