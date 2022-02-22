/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { useSelector, useDispatch } from 'react-redux';
import { GRASS_REQUEST } from 'reducers/grass';
import 'react-calendar-heatmap/dist/styles.css';
import 'components/Mypage/react-calendar-heatmap.css';
import styled from 'styled-components';
import media from 'styles/media';
import moment from 'moment';

const CHMContainer = styled.div`
  width: 100%;
`;

const CHM = styled.div`
  width: 100%;
  padding: 3rem;

  ${media.tablet`
    padding: 1rem;
  `}

  ${media.mobile`
    padding: 0;
  `}
`;

const ChartLabel = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  font-weight: 600;
`;

const today = new Date();

const CalendarHeatMap = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GRASS_REQUEST,
      id: props.id,
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
      <ChartLabel>작성한 TIL</ChartLabel>
      <CHM>
        <CalendarHeatmap
          startDate={moment().subtract(1, 'year')}
          endDate={today}
          values={TILCount}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }

            const count = value.count || 0;

            if (count > 4) {
              return 'color-github-5';
            }
            if (count > 3) {
              return 'color-github-4';
            }
            if (count > 2) {
              return 'color-github-3';
            }
            if (count > 1) {
              return 'color-github-2';
            }
            if (count > 0) {
              return 'color-github-1';
            }
            return 'color-empty';
          }}
        />
      </CHM>

      <ChartLabel>공부한 TTL</ChartLabel>
      <CHM>
        <CalendarHeatmap
          startDate={moment().subtract(1, 'year')}
          endDate={today}
          values={TTLCount}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }

            const count = value.count || 0;

            if (count > 16) {
              return 'color-gitlab-4';
            }
            if (count > 11) {
              return 'color-gitlab-3';
            }
            if (count > 6) {
              return 'color-gitlab-2';
            }
            if (count > 0) {
              return 'color-gitlab-1';
            }
            return 'color-empty';
          }}
        />
      </CHM>
    </CHMContainer>
  );
};

export default CalendarHeatMap;
