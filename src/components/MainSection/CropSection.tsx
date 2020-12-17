import React, { useEffect, useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import { cropImage } from '@src/store/modules/saveMode';
import { Modal } from './MainSectionStyle';

interface cropProps {
  height: number;
  visible: boolean;
}

const CropSection = ({ height, visible }: cropProps) => {
  const dispatch = useDispatch();
  const [cropData, setCrop] = useState({});
  const [imageRef, setImageRef] = useState();
  const [inputs, setInputs] = useState({
    url: '',
    cropUrl: '',
  });
  const { url } = inputs;
  const ref = useRef();
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  let imageUrl;
  const onChangeHandler = (crop: any) => {
    setCrop(crop);
  };
  const getCroppedImg = (image: any, crop: any) => {
    const canvas = document.createElement('canvas'); // document 상에 canvas 태그 생성
    // 캔버스 영역을 크롭한 이미지 크기 만큼 조절
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    // 화면에 크롭된 이미지를 그린다
    ctx.drawImage(
      // 원본 이미지 영역
      image, // 원본 이미지
      crop.x * scaleX, // 크롭한 이미지 x 좌표
      crop.y * scaleY, // 크롭한 이미지 y 좌표
      crop.width * scaleX, // 크롭한 이미지 가로 길이
      crop.height * scaleY, // 크롭한 이미지 세로 길이
      // 캔버스 영역
      0, // 캔버스에서 이미지 시작 x 좌표
      0, // 캔버스에서 이미지 시작 y 좌표
      crop.width, // 캔버스에서 이미지 가로 길이
      crop.height //  캔버스에서 이미지 세로 길이
    );
    return new Promise((resolve) => {
      resolve(canvas.toDataURL());
    });
  };
  const makeClientCrop = async (crop: any) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = (await getCroppedImg(imageRef, crop)) as string;
      setInputs({
        ...inputs,
        cropUrl: croppedImageUrl,
      });
      dispatch(cropImage(croppedImageUrl));
    }
  };

  const onComplateHandler = (crop: any) => {
    makeClientCrop(crop);
  };
  const onImageLoaded = (image: any) => {
    setImageRef(image);
  };

  useEffect(() => {
    const getHtml = async () => {
      const src = mathQuillContainer.current;
      const canvas = await html2canvas(src);
      imageUrl = canvas.toDataURL('image/gif');
      setInputs({
        ...inputs,
        url: imageUrl,
      });
      setCrop({ width: 30, height: 30, unit: 'px' });
    };

    getHtml();
  }, []);

  return (
    <>
      <Modal display="block" height={height} visible={visible}>
        <ReactCrop
          src={url}
          crop={cropData}
          ruleOfThirds
          onChange={onChangeHandler}
          onComplete={onComplateHandler}
          onImageLoaded={onImageLoaded}
          ref={ref}
        />
      </Modal>
    </>
  );
};

export default CropSection;
