import React from 'react';
import Image from 'next/image'

const Appstore = (props) => {
  return <div>
    <p className="text-xs mb-2 opacity-50 sm:hidden">Download</p>
    <a target="_blank" href="https://apps.apple.com/de/app/personio/id1470197212" rel="noopener noreferrer" className="mr-2">
      <Image src="/assets/design/app-store.svg" width={92} height={31} alt="App Store" />
    </a>
    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.personio&hl=en&gl=US" rel="noopener noreferrer">
      <Image src="/assets/design/google-play.svg" width={106} height={32} alt="Play Store" />
    </a>
  </div>;
};

export default Appstore;
