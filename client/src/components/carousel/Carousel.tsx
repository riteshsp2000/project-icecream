import React, { useState } from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';
import NukaCarousel from 'nuka-carousel';

// Components
import Item from './Item';

// Types
import { FrameData, Crop } from '../../types';
interface Props {
  data: FrameData[];
  uploadImage: null | File;
  crop: Crop;
  zoom: number;
  aspect: number;
  setCrop: (param: Crop) => void;
  setZoom: (param: number) => void;
}

const FrameCarousel: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { data, uploadImage, crop, zoom, aspect, setCrop, setZoom } = props;
  const [carouselSlide, setCarouselSlider] = useState<number>(0);

  const onPreviousClick = () => setCarouselSlider(carouselSlide - 1);
  const onNextClick = () => setCarouselSlider(carouselSlide + 1);

  return (
    <div className={classes.root}>
      <NukaCarousel
        wrapAround={true}
        dragging={false}
        disableEdgeSwiping={true}
        transitionMode='scroll'
        slideIndex={carouselSlide}
        afterSlide={(slideIndex) => setCarouselSlider(slideIndex)}
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
      >
        {data.map((frame, index) => (
          <Item
            key={index}
            uploadImage={uploadImage}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            setCrop={setCrop}
            setZoom={setZoom}
            onPreviousClick={onPreviousClick}
            onNextClick={onNextClick}
            frame={frame.frame}
            bgcolor={data[index].background}
            frameData={frame}
          />
        ))}
      </NukaCarousel>
    </div>
  );
};

export default FrameCarousel;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
}));
