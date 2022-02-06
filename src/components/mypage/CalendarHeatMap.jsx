import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import styled from 'styled-components';

const Grass = styled.div`
  width: 55rem;
  /* background: #eaeaea; */
`;

const Grass1 = styled.div`
  width: 55rem;
  padding-left: 3.25rem;
`;

const Grass2 = styled.div`
  width: 55rem;
  padding-left: 3.25rem;
`;

const TIL = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const TTL = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

const CalendarHeatMap = () => {
  return (
    <Grass>
      <TIL>내가 작성한 TIL</TIL>
      <Grass1>
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
      </Grass1>
      <TTL>내가 본 TTL</TTL>
      <Grass2>
        <CalendarHeatmap
          startDate={new Date('2022-1-1')}
          endDate={new Date('2022-12-31')}
          values={[
            { date: '2022-01-01' },
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
      </Grass2>
    </Grass>
  );
};

export default CalendarHeatMap;
