import styled from 'styled-components';
import { Form, Divider, Checkbox, Button } from 'semantic-ui-react';
import * as C from 'components/common/Containers';
import COLOR from 'constants/color.constant';
import { darken, lighten } from 'polished';
import media from 'styles/media';

export const SettingContainer = styled.div`
  width: 55%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktop`
    width: 60%;
  `}

  ${media.tablet`
    width: 80vw;
  `}
`;

export const Container = styled.div`
  display: flex;
  height: 2rem !important;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const LabelContainer = styled(C.RowStartContainer)`
  align-items: center;
`;

export const Title = styled(C.RowStartContainer)`
  align-items: center;
  width: 9rem;
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: auto;
  opacity: 0.6;
  margin-right: 0.5rem;
`;

export const Label = styled.div`
  font-family: 'NS-B';
  font-size: 1rem;
  margin-right: 1rem;
`;

export const Btn = styled(Button)`
  cursor: pointer;
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-size: 0.9rem !important;
  padding: 0.1rem 0.6rem !important;
  font-family: 'NS-L' !important;
  &:hover {
    background: ${darken(0.05, COLOR.PRIMARY)} !important;
  }
`;

export const Field = styled(Form.Field)`
  input {
    height: 2rem !important;
    font-size: 1rem !important;
    font-family: 'NS-R' !important;
  }
`;

export const Content = styled.p`
  font-family: 'NS-R';
`;

export const LightText = styled.span`
  font-family: 'NS-R';
  font-size: 0.85rem;
  color: ${COLOR.LIGHTGRAY};
`;

export const Line = styled(Divider)`
  margin: 1.5rem 0 !important;
`;

export const Slider = styled(Checkbox)`
  width: 2rem;
  margin: 0;
`;

export const Github = styled.div`
  cursor: pointer;
  font-family: 'NS-R' !important;
  font-size: 0.8rem;
  margin-right: 1rem;
  color: ${COLOR.PRIMARY};

  &:hover {
    color: ${lighten(0.1, COLOR.PRIMARY)};
  }
`;
