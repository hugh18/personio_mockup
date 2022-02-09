import React from 'react';
import Image from 'next/image'

const Banner = () => {
  return <article className="relative">
      <div className="absolute z-10">
         <Image src="/assets/design/banner-mask.svg" alt="Banner" width={1536} height={720} />
      </div>
      <div>
         <Image src="/assets/design/banner-image.jpg" alt="Banner" width={1536} height={720}  quality={80} />
      </div>
  </article>;
};

export default Banner;
