import { css } from "styled-components";

export const sizes = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  phone: 375,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
