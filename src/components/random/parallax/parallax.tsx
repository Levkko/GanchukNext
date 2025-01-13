"use client";

import { Parallax as ParallaxCore, ParallaxProps, ParallaxProvider } from 'react-scroll-parallax';

export const Parallax = (props: ParallaxProps) => {
  return (
    <ParallaxProvider>
      <ParallaxCore {...props} />
    </ParallaxProvider>
  );
};