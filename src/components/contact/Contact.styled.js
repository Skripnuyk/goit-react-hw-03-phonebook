import styled from 'styled-components';

export const ContactWrap = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;

export const ContactTitle = styled.p`
  display: flex;
  padding-right: 5px;
`;

export const DeleteButton = styled.button`
  width: 120px;
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
