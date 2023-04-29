import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  display: flex;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 300px;
  outline: none;
  border-radius: 4px;
  margin-bottom: 20px;
  
  :focus, :hover {
    border-color: #0084ff;
`;

export const AddButton = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 4px;
  border: none;
  color: #010101;
  background-color: #f1f1f1;

  :focus,
  :hover {
    color: antiquewhite;
    background-color: #0084ff;
  }
`;
