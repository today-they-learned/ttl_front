import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GRASS_REQUEST } from 'reducers/grass';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import styled from 'styled-components';

const CHMContainer = styled.div`
  width: 62rem;
`;

const CHM = styled.div`
  width: 62rem;
  padding-left: 3.5rem;
`;

const TilLabel = styled.div`
  margin-top: 1.5rem;
  margin-left: 5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TtlLabel = styled.div`
  margin-top: 2.5rem;
  margin-left: 5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CalendarHeatMap = () => {
  const { user } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GRASS_REQUEST,
      id: user.user.id,
    });
  }, [dispatch]);
  const { grass } = useSelector((state) => state.grass);

  console.log(grass);

  // const result = [];
  // for (let i = 0; i < grass.length; i += 1) {
  //   result.push({
  //     date: grass[i].createdAt,
  //     count: grass[i].studyCount,
  //   });
  // }
  // console.log(result);

  return (
    <CHMContainer>
      <TilLabel>내가 작성한 TIL</TilLabel>
      <CHM>
        <CalendarHeatmap
          startDate={new Date('2022-1-1')}
          endDate={new Date('2022-12-31')}
          values={[
            { date: '2022-01-02', count: 12 },
            { date: '2022-01-12', count: 123 },
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

export default CalendarHeatMap;
