import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { useSelector, useDispatch } from 'react-redux';
import { GRASS_REQUEST } from 'reducers/grass';
import 'react-calendar-heatmap/dist/styles.css';
import 'components/Mypage/react-calendar-heatmap.css';
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

export default CalendarHeatMapMobile;
