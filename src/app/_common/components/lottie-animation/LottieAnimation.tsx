import React from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { colorify } from 'lottie-colorify';

type Props = {
  animationData: LottieComponentProps['animationData'];
  width?: string | number;
  height?: string | number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  speed?: number;
  color?: string;
  onComplete?: () => void;
  onLoopComplete?: () => void;
};

const LottieAnimation = ({
  animationData,
  width = 100,
  height = 100,
  loop = true,
  autoplay = true,
  className,
  color,
  onComplete,
  onLoopComplete,
}: Props) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const coloredData = color ? colorify([color], animationData) : animationData;

  return (
    <Lottie
      animationData={coloredData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
    />
  );
};

export default LottieAnimation;
