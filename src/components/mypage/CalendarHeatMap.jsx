import React, { useEffect, useState } from 'react';
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

  const { grass, grassDone } = useSelector((state) => state.grass);

  const [TILCount, setTILCount] = useState([]);
  const [TTLCount, setTTLCount] = useState([]);

  const tilCount = [];
  const ttlCount = [];

  useEffect(() => {
    if (grassDone) {
      for (let i = 0; i < grass.length; i += 1) {
        tilCount.push({
          date: grass[i].createdAt,
          count: grass[i].writeCount + grass[i].editCount,
        });
      }
      for (let i = 0; i < grass.length; i += 1) {
        ttlCount.push({
          date: grass[i].createdAt,
          count: grass[i].studyCount,
        });
      }
      setTILCount(tilCount);
      setTTLCount(ttlCount);
    }
  }, [grassDone]);

  return (
    <CHMContainer>
      <TilLabel>내가 작성한 TIL</TilLabel>
      <CHM>
        <CalendarHeatmap
          startDate={new Date('2021-9-1')}
          endDate={new Date('2022-9-31')}
          values={TILCount}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${value.count}`;
          }}
        />
      </CHM>

      <TtlLabel>내가 본 TTL</TtlLabel>
      <CHM>
        <CalendarHeatmap
          startDate={new Date('2021-9-1')}
          endDate={new Date('2022-9-31')}
          values={TTLCount}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-gitlab-${value.count}`;
          }}
        />
      </CHM>
    </CHMContainer>
  );
};

export default CalendarHeatMap;
