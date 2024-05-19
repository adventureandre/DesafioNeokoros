import styled from 'styled-components'

export const Container = styled.section`
  padding: 10px 15px;

  margin-top: 20px;
`

export const InfoTask = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const InfoTaskTotal = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  min-width: 150px;
`
export const InfoTaskExecutadas = styled.span`
  color: #8284fa;
  min-width: 150px;
  em {
    border-radius: 25%;
    background: #1a1a1a;
    padding: 8px;
    color: #ffff;
    width: 150px;
  }
`

export const Content = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin-top: 10px;
`

export const TaskBox = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: ${({ theme }) => theme.colors.primaryOver};

  width: 100%;
  min-height: 60px;
  margin-bottom: 10px;

  label {
    flex-basis: 85%;
  }
  button {
    background: none;
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
  .completed {
    text-decoration: line-through !important;
    color: #b2b2b2;
  }
`
