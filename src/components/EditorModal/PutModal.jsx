import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';
import { PUT_REQUEST } from 'reducers/post';
import authHeader from 'sagas/auth-header';
import axios from 'axios';

import * as Styled from './ModalStyle';

const PutModal = ({
  onClose,
  maskClosable,
  closable,
  visible,
  titleText,
  postContent,
  tags,
  onChangeTags,
  thumbnailFile,
  onChangeThumbnail,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, putError, putDone } = useSelector((state) => state.post);

  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [imageError, setimageError] = useState('');
  const [errorAnimation, setErrorAnimation] = useState(false);

  const tagsRef = useRef();
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  const onImageChange = (e) => {
    (async () => {
      const img = e.target.files[0];
      onChangeThumbnail(img);
      const formData = new FormData();
      formData.append('image', img);
      try {
        const { data: filename } = await axios.post('/articles/upload_image/', formData, {
          headers: authHeader(),
        });
        setThumbnailUrl(`${filename.url}`);
        setimageError('');
      } catch (err) {
        onChangeThumbnail('');
        setThumbnailUrl('');
        setimageError('올바르지 않은 파일 형식입니다.');
        setErrorAnimation(false);
      }
    })();
    return false;
  };

  useEffect(() => {
    const urlName = thumbnailFile && thumbnailFile.name;
    setThumbnailUrl(`http://api.todaytheylearn.com/media/uploads/${urlName}`);
    tagsRef.current.value = tags;
  }, []);

  const onTagsChange = (e) => {
    const coma = ',';
    e.target.value.includes(coma);
    if (e.target.value.includes(coma)) {
      onChangeTags(e.target.value.split(','));
    } else {
      onChangeTags(e.target.value.split());
    }
  };

  const onSubmitPost = useCallback(() => {
    const img = thumbnailFile;
    const formData = new FormData();
    const tagsArr = tags.split(',');
    if (img) {
      formData.append('thumbnail', img);
    }
    axios.post('/articles/upload_image/', formData, {
      headers: authHeader(),
    });
    formData.append('title', titleText);
    formData.append('content', postContent);
    formData.append('tags', JSON.stringify(tagsArr));

    dispatch({
      type: PUT_REQUEST,
      data: formData,
      id,
    });
  });

  useEffect(() => {
    if (putError) {
      setErrorAnimation(true);
    }
  }, [putError]);

  useEffect(() => {
    if (putDone) {
      navigate(`/article/${post.id}`);
    }
  }, [putDone]);

  return (
    <>
      <Styled.ModalOverlay visible={visible} />
      <Styled.ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <Styled.ModalInner tabIndex="0">
          <Styled.ModalContent>
            <Styled.ModalLeft>
              {thumbnailFile ? (
                <Styled.ThumbnailContainer>
                  <Styled.ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
                </Styled.ThumbnailContainer>
              ) : (
                <Icon name="images" style={{ fontSize: '5rem' }} />
              )}
              <input
                type="file"
                onChange={onImageChange}
                ref={inputRef}
                style={{ display: 'none' }}
              />
              <Styled.ThumbnailBtn onClick={onButtonClick}>썸네일 추가</Styled.ThumbnailBtn>
              {imageError && (
                <Styled.ErrorMessage errorAnimation={errorAnimation}>
                  {imageError}
                </Styled.ErrorMessage>
              )}
            </Styled.ModalLeft>
            <Styled.VerticalLine />
            <Styled.ModalRight>
              <div>
                <Styled.ContentTitle>제목</Styled.ContentTitle>
                <Styled.Title>{titleText}</Styled.Title>
                <Styled.ContentTitle>태그 설정</Styled.ContentTitle>
                <Styled.TagInput
                  type="text"
                  placeholder="쉼표로 구분해서 작성하면 태그를 등록할 수 있습니다"
                  ref={tagsRef}
                  onChange={onTagsChange}
                />
              </div>
              {closable && (
                <Styled.ButtonContainer>
                  <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
                  <Styled.SubmitButton onClick={onSubmitPost}>작성 완료</Styled.SubmitButton>
                </Styled.ButtonContainer>
              )}
            </Styled.ModalRight>
          </Styled.ModalContent>
        </Styled.ModalInner>
      </Styled.ModalWrapper>
    </>
  );
};

export default PutModal;
