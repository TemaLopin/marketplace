import { SVGAttributes } from "react";

export const CrossIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='mask0_92_18197'
      mask-type='alpha'
      maskUnits='userSpaceOnUse'
      x='7'
      y='7'
      width='16'
      height='16'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.2803 8.78033C22.5732 8.48744 22.5732 8.01256 22.2803 7.71967C21.9874 7.42678 21.5126 7.42678 21.2197 7.71967L15 13.9393L8.78033 7.71967C8.48744 7.42678 8.01256 7.42678 7.71967 7.71967C7.42678 8.01256 7.42678 8.48744 7.71967 8.78033L13.9393 15L7.71967 21.2197C7.42678 21.5126 7.42678 21.9874 7.71967 22.2803C8.01256 22.5732 8.48744 22.5732 8.78033 22.2803L15 16.0607L21.2197 22.2803C21.5126 22.5732 21.9874 22.5732 22.2803 22.2803C22.5732 21.9874 22.5732 21.5126 22.2803 21.2197L16.0607 15L22.2803 8.78033Z'
        fill='black'
      />
    </mask>
    <g mask='url(#mask0_92_18197)'>
      <path d='M27 3H3V27H27V3Z' fill='#808080' />
    </g>
  </svg>
)
