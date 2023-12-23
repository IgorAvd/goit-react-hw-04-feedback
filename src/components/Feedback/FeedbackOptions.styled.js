import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 25px;
  margin-bottom: 25px;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  border-radius: 4px;
  padding: 4px 10px;
  border-color: cyan;
  cursor: pointer;

  &:active {
    background-color: aqua;
  }
`;
