import { connection } from 'next/server';
import { sleep } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const GraphicLineChart = async ({
  props = {},
  renderTime
}: {
  props?: ComponentPropsWithoutRef<'svg'>;
  renderTime: number;
}) => {
  await connection();
  await sleep(renderTime);

  return (
    <article className='graphic'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        baseProfile='full'
        viewBox='0 0 800 600'
        {...props}
      >
        <path fill='#fff' d='M0 0h800v600H0z' />
        <path
          fill='none'
          stroke='#dbdee4'
          d='M80 540.5h640M80 456.5h640M80 372.5h640M80 288.5h640M80 204.5h640M80 120.5h640'
          className='zr4-cls-94'
        />
        <path
          fill='none'
          stroke='#54555a'
          strokeLinecap='round'
          d='M80 540.5h640'
          className='zr4-cls-94'
        />
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 540)'
        >
          {'0'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 456)'
        >
          {'500'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 372)'
        >
          {'1,000'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 288)'
        >
          {'1,500'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 204)'
        >
          {'2,000'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 120)'
        >
          {'2,500'}
        </text>
        <text
          xmlSpace='preserve'
          y={6}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='middle'
          transform='translate(92.8 548)'
        >
          {'iPhone 15'}
        </text>
        <text
          xmlSpace='preserve'
          y={6}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='middle'
          transform='translate(246.4 548)'
        >
          {'Adidas Ultraboost'}
        </text>
        <text
          xmlSpace='preserve'
          y={6}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='middle'
          transform='translate(400 548)'
        >
          {'Uniqlo T-Shirt'}
        </text>
        <text
          xmlSpace='preserve'
          y={6}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='middle'
          transform='translate(553.6 548)'
        >
          {'Canon Camera'}
        </text>
        <text
          xmlSpace='preserve'
          y={6}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='middle'
          transform='translate(707.2 548)'
        >
          {'Monster Energy'}
        </text>
        <g clipPath='url(#zr4-c0)'>
          <path
            fill='none'
            stroke='#d87c7c'
            strokeLinejoin='bevel'
            strokeWidth={2}
            d='m92.8 523.368 25.6-25.2L144 535.8l25.6-5.88 25.6 3.36 25.6 4.704 25.6-1.008 25.6 1.848 25.6.168 25.6-2.184 25.6 1.68 25.6.168 25.6 1.008 25.6-1.848 25.6 1.344 25.6-14.28 25.6 10.08 25.6-16.8 25.6 11.76 25.6 6.72 25.6 3.192h102.4'
            className='zr4-cls-97'
          />
        </g>
        <g clipPath='url(#zr4-c1)'>
          <path
            fill='none'
            stroke='#919e8b'
            strokeLinejoin='bevel'
            strokeWidth={2}
            d='m92.8 537.48 25.6 1.176 25.6-3.696 25.6 3.024 25.6-1.344 25.6-5.04 25.6 2.52 25.6-7.56 25.6 3.36 25.6 5.88 25.6-2.52 25.6.84L400 523.2l25.6 13.44 25.6-6.72 25.6 7.056 25.6.504 25.6.84 25.6.336 25.6-2.856 25.6-29.4 25.6 8.4 25.6-25.2 25.6 3.36 25.6 26.88'
            className='zr4-cls-97'
          />
        </g>
        <g clipPath='url(#zr4-c2)'>
          <path
            fill='none'
            stroke='#d7ab82'
            strokeLinejoin='bevel'
            strokeWidth={2}
            d='m92.8 519.84 25.6 5.88 25.6-21 25.6 19.32 25.6-14.28 25.6-23.52 25.6 13.44L272 464.4l25.6 11.76 25.6 31.92 25.6-15.12 25.6 10.08L400 397.2l25.6 117.6 25.6-45.36 25.6 52.08 25.6 5.04 25.6 2.52 25.6 3.864 25.6-19.824L604.8 288l25.6 50.4L656 120l25.6 50.4 25.6 210'
            className='zr4-cls-97'
          />
        </g>
        <g clipPath='url(#zr4-c3)'>
          <path
            fill='none'
            stroke='#6e7074'
            strokeLinejoin='bevel'
            strokeWidth={2}
            d='m92.8 539.194 25.6-.017 25.6.033 25.6.017 25.6-.033 25.6.05 25.6-.017 25.6.05 25.6-.016 25.6-.05 25.6.083 25.6-.033 25.6.05 25.6-.033 25.6.05 25.6-.084 25.6-.034 25.6.05 25.6-.066 25.6.084 25.6.016 25.6.034 25.6-.017 25.6.034 25.6-.067'
            className='zr4-cls-97'
          />
        </g>
        <g clipPath='url(#zr4-c4)'>
          <path
            fill='none'
            stroke='#61a0a8'
            strokeLinejoin='bevel'
            strokeWidth={2}
            d='m92.8 498.84 25.6 9.408L144 486.24l25.6 26.04 25.6-19.32 25.6-21.84 25.6 10.08 25.6-28.56 25.6 6.72 25.6 31.92 25.6-11.76 25.6 11.76 25.6-55.44 25.6 73.92 25.6-45.36 25.6 38.64 25.6 11.76 25.6 5.04 25.6 5.208 25.6-20.328 25.6-107.52 25.6 28.56L656 338.4l25.6 25.2 25.6 89.04'
            className='zr4-cls-97'
          />
        </g>
        <path
          fill='#fff'
          stroke='#d87c7c'
          strokeWidth={2.0001049999999996}
          d='M94.103 523.368'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d87c7c'
          strokeWidth={2.000035}
          d='M119.103 498.168'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d87c7c'
          strokeWidth={1.9975819999999997}
          d='M144.103 535.8'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d87c7c'
          strokeWidth={0}
          d='M707.2 539.832'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#919e8b'
          strokeWidth={2.0001049999999996}
          d='M94.103 537.48'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#919e8b'
          strokeWidth={2.000035}
          d='M119.103 538.656'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#919e8b'
          strokeWidth={1.9975819999999997}
          d='M144.103 534.96'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#919e8b'
          strokeWidth={0}
          d='M707.2 519.84'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d7ab82'
          strokeWidth={2.0001049999999996}
          d='M94.103 519.84'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d7ab82'
          strokeWidth={2.000035}
          d='M119.103 525.72'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d7ab82'
          strokeWidth={1.9975819999999997}
          d='M144.103 504.72'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#d7ab82'
          strokeWidth={0}
          d='M707.2 380.4'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#6e7074'
          strokeWidth={2.0001049999999996}
          d='M94.103 539.194'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#6e7074'
          strokeWidth={2.000035}
          d='M119.103 539.177'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#6e7074'
          strokeWidth={1.9975819999999997}
          d='M144.103 539.21'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#6e7074'
          strokeWidth={0}
          d='M707.2 539.278'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#61a0a8'
          strokeWidth={2.0001049999999996}
          d='M94.103 498.84'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#61a0a8'
          strokeWidth={2.000035}
          d='M119.103 508.248'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#61a0a8'
          strokeWidth={1.9975819999999997}
          d='M144.103 486.24'
          className='zr4-cls-102'
        />
        <path
          fill='#fff'
          stroke='#61a0a8'
          strokeWidth={0}
          d='M707.2 452.64'
          className='zr4-cls-102'
        />
        <path
          fillOpacity={0}
          stroke='#b7b9be'
          strokeWidth={0}
          d='M216.035 48h367.93v23.2h-367.93Z'
          className='zr4-cls-94'
        />
        <path
          stroke='#d87c7c'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M222.035 59.6h25'
          className='zr4-cls-94'
        />
        <path
          fill='#fff'
          stroke='#d87c7c'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M240.135 59.6'
          className='zr4-cls-94'
        />
        <text
          x={30}
          y={7}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          transform='translate(222.035 52.6)'
        >
          {'Price'}
        </text>
        <path
          fill='none'
          d='M221.035 53h58.944v13.2h-58.944Z'
          className='zr4-cls-103'
        />
        <path
          stroke='#919e8b'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M288.978 59.6h25'
          className='zr4-cls-94'
        />
        <path
          fill='#fff'
          stroke='#919e8b'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M307.079 59.6'
          className='zr4-cls-94'
        />
        <text
          x={30}
          y={7}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          transform='translate(288.978 52.6)'
        >
          {'Stock'}
        </text>
        <path
          fill='none'
          d='M287.978 53h62.061v13.2h-62.06Z'
          className='zr4-cls-103'
        />
        <path
          stroke='#d7ab82'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M359.04 59.6h25'
          className='zr4-cls-94'
        />
        <path
          fill='#fff'
          stroke='#d7ab82'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M377.14 59.6'
          className='zr4-cls-94'
        />
        <text
          x={30}
          y={7}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          transform='translate(359.04 52.6)'
        >
          {'Sales'}
        </text>
        <path
          fill='none'
          d='M358.04 53h60.114v13.2H358.04Z'
          className='zr4-cls-103'
        />
        <path
          stroke='#6e7074'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M427.154 59.6h25'
          className='zr4-cls-94'
        />
        <path
          fill='#fff'
          stroke='#6e7074'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M445.254 59.6'
          className='zr4-cls-94'
        />
        <text
          x={30}
          y={7}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          transform='translate(427.154 52.6)'
        >
          {'Rating'}
        </text>
        <path
          fill='none'
          d='M426.154 53h68.201v13.2h-68.2Z'
          className='zr4-cls-103'
        />
        <path
          stroke='#61a0a8'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M503.356 59.6h25'
          className='zr4-cls-94'
        />
        <path
          fill='#fff'
          stroke='#61a0a8'
          strokeMiterlimit={10}
          strokeWidth={2}
          d='M521.456 59.6'
          className='zr4-cls-94'
        />
        <text
          x={30}
          y={7}
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          transform='translate(503.356 52.6)'
        >
          {'Reviews'}
        </text>
        <path
          fill='none'
          d='M502.356 53h76.609v13.2h-76.61Z'
          className='zr4-cls-103'
        />
        <path
          fillOpacity={0}
          stroke='#3c3c41'
          strokeWidth={0}
          d='M395 15h10v10h-10Z'
          className='zr4-cls-94'
        />
        <defs>
          <clipPath id='zr4-c0'>
            <path
              d='M79 119h68.694v422H79Z'
              className='zr4-cls-96'
              style={{
                animation: 'zr4-ani-0 1s linear both'
              }}
            />
          </clipPath>
          <clipPath id='zr4-c1'>
            <path
              d='M79 119h68.694v422H79Z'
              className='zr4-cls-96'
              style={{
                animation: 'zr4-ani-1 1s linear both'
              }}
            />
          </clipPath>
          <clipPath id='zr4-c2'>
            <path
              d='M79 119h68.694v422H79Z'
              className='zr4-cls-96'
              style={{
                animation: 'zr4-ani-2 1s linear both'
              }}
            />
          </clipPath>
          <clipPath id='zr4-c3'>
            <path
              d='M79 119h68.694v422H79Z'
              className='zr4-cls-96'
              style={{
                animation: 'zr4-ani-3 1s linear both'
              }}
            />
          </clipPath>
          <clipPath id='zr4-c4'>
            <path
              d='M79 119h68.694v422H79Z'
              className='zr4-cls-96'
              style={{
                animation: 'zr4-ani-4 1s linear both'
              }}
            />
          </clipPath>
        </defs>
        <style>
          {
            '@keyframes zr4-ani-0{0%{d:path("M79 119l0 0l0 422l0 0Z")}to{d:path("M79 119l642 0l0 422l-642 0Z")}}@keyframes zr4-ani-1{0%{d:path("M79 119l0 0l0 422l0 0Z")}to{d:path("M79 119l642 0l0 422l-642 0Z")}}@keyframes zr4-ani-2{0%{d:path("M79 119l0 0l0 422l0 0Z")}to{d:path("M79 119l642 0l0 422l-642 0Z")}}@keyframes zr4-ani-3{0%{d:path("M79 119l0 0l0 422l0 0Z")}to{d:path("M79 119l642 0l0 422l-642 0Z")}}@keyframes zr4-ani-4{0%{d:path("M79 119l0 0l0 422l0 0Z")}to{d:path("M79 119l642 0l0 422l-642 0Z")}}.zr4-cls-94:hover{pointer-events:none}.zr4-cls-96:hover{cursor:pointer;fill:#000}.zr4-cls-97:hover{cursor:pointer}.zr4-cls-102:hover{cursor:pointer;fill:#fff}.zr4-cls-103:hover{cursor:pointer;fill:transparent}'
          }
        </style>
      </svg>
    </article>
  );
};
