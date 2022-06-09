import Image from 'next/image';

const BaseImg = ({
  src,
  alt = 'image',
  size,
  q = 60,
  objectFit = 'contain'
}) => {
  if (isNaN(size?.h) || isNaN(size?.w)) {
    throw new Error('size prop must be instance of {h: number, w: number}');
  }
  return (
    <Image
      src={`${src}?x-img=v1/optimize,q_${q}/resize,h_${size.h},w_${size.w}`}
      alt={alt}
      placeholder={'blur'}
      blurDataURL={`${src}?x-img=v1/optimize,q_1/resize,h_50,w_50,force_true/blur,sigma_20`}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit={objectFit}
    />
  );
};

export default BaseImg;
