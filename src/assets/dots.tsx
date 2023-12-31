import { SVGAttributes } from 'react'

export const Dots = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    id='Flat'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    {...props}
  >
    <path d='M116,64a12,12,0,1,1,12,12A12.01375,12.01375,0,0,1,116,64Zm12,52a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Zm0,64a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,180Z' />
  </svg>
)
