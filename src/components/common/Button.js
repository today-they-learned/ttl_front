import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import COLOR from 'constants/color.constant';
import { darken } from 'polished';

export const PrimaryBtn = styled(Button)`
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-family: 'NS-R' !important;
  font-weight: 100 !important;
  height: 3rem;
  font-size: 18px !important;

  &:hover {
    background: ${darken(0.03, COLOR.PRIMARY)} !important;
  }
`;
