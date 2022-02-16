import styled from 'styled-components';

export const AlignCenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AlignMiddleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RowStartContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ColumnStartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
