import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import styled from 'styled-components';

const CHMContainer = styled.div`
  width: 28rem;
  padding-top: 2rem;
`;

const CHM = styled.div`
  width: 27.6rem;
  padding-left: 0.2rem;
`;

const TilLabel = styled.div`
  clear: left;
  margin-top: 1.5rem;
  margin-left: 1.4rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

const TtlLabel = styled.div`
  margin-top: 2.5rem;
  margin-left: 1.4rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

const CalendarHeatMapMobile = () => {
  return (
    <CHMContainer>
      <TilLabel>내가 작성한 TIL</TilLabel>
      <CHM>
        <CalendarHeatmap
          startDate={new Date('2022-1-1')}
          endDate={new Date('2022-12-31')}
          values={[
            { date: '2022-01-01' },
            { date: '2022-01-22' },
            { date: '2022-01-23' },
            { date: '2022-01-24' },
            { date: '2022-01-25' },
            { date: '2022-01-26' },
            { date: '2022-01-27' },
            { date: '2022-01-30' },
            { date: '2022-02-17' },
            { date: '2022-02-18' },
            { date: '2022-02-21' },
            { date: '2022-02-22' },
            { date: '2022-02-28' },
          ]}
        />
      </CHM>
      <TtlLabel>내가 본 TTL</TtlLabel>
      <CHM>
        <CalendarHeatmap
          startDate={new Date('2022-1-1')}
          endDate={new Date('2022-12-31')}
          values={[
            { date: '2022-01-01', count: 100 },
            { date: '2022-01-05' },
            { date: '2022-01-07' },
            { date: '2022-01-17' },
            { date: '2022-01-22' },
            { date: '2022-01-23' },
            { date: '2022-01-24' },
            { date: '2022-01-25' },
            { date: '2022-01-26' },
            { date: '2022-01-27' },
            { date: '2022-01-30' },
            { date: '2022-02-2' },
            { date: '2022-02-4' },
            { date: '2022-02-13' },
            { date: '2022-02-14' },
            { date: '2022-02-17' },
            { date: '2022-02-18' },
            { date: '2022-02-21' },
            { date: '2022-02-22' },
            { date: '2022-02-24' },
            { date: '2022-02-28' },
            { date: '2022-03-6' },
            { date: '2022-03-8' },
            { date: '2022-03-9' },
            { date: '2022-03-10' },
            { date: '2022-03-12' },
          ]}
        />
      </CHM>
    </CHMContainer>
  );
};

export default CalendarHeatMapMobile;
