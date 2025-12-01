export const dynamic = "force-dynamic"; 
import { ComponentPropsWithoutRef } from 'react';
import { sleep } from '@/lib/utils';

export const GraphicBar = async ({
  props = {},
  renderTime
}: {
  props?: ComponentPropsWithoutRef<'svg'>;
  renderTime: number;
}) => {
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
          d='M80 540.5h640M80 444.5h640M80 348.5h640M80 252.5h640M80 156.5h640M80 60.5h640'
          className='zr3-cls-58'
        />
        <path
          fill='none'
          stroke='#54555a'
          strokeLinecap='round'
          d='M80 540.5h640'
          className='zr3-cls-58'
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
          transform='translate(72 444)'
        >
          {'20'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 348)'
        >
          {'40'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 252)'
        >
          {'60'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 156)'
        >
          {'80'}
        </text>
        <text
          fill='#54555a'
          dominantBaseline='central'
          style={{
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
          }}
          textAnchor='end'
          transform='translate(72 60)'
        >
          {'100'}
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
          {'Internet Users (%)'}
        </text>
        <path
          fill='#d87c7c'
          stroke='#000'
          strokeWidth={0}
          d='M128 540h19.854v-1.789H128Z'
          className='zr3-cls-60'
          style={{
            animation: 'zr3-ani-0 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#919e8b'
          stroke='#000'
          strokeWidth={0}
          d='M149.84 540h19.853v-1.753H149.84Z'
          className='zr3-cls-62'
          style={{
            animation: 'zr3-ani-1 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#d7ab82'
          stroke='#000'
          strokeWidth={0}
          d='M171.679 540h19.854v-1.753h-19.854Z'
          className='zr3-cls-64'
          style={{
            animation: 'zr3-ani-2 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#6e7074'
          stroke='#000'
          strokeWidth={0}
          d='M193.518 540h19.854v-1.753h-19.854Z'
          className='zr3-cls-66'
          style={{
            animation: 'zr3-ani-3 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#61a0a8'
          stroke='#000'
          strokeWidth={0}
          d='M215.358 540h19.854v-1.735h-19.854Z'
          className='zr3-cls-68'
          style={{
            animation: 'zr3-ani-4 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#efa18d'
          stroke='#000'
          strokeWidth={0}
          d='M237.197 540h19.854v-1.735h-19.854Z'
          className='zr3-cls-70'
          style={{
            animation: 'zr3-ani-5 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#787464'
          stroke='#000'
          strokeWidth={0}
          d='M259.036 540h19.854v-1.717h-19.854Z'
          className='zr3-cls-72'
          style={{
            animation: 'zr3-ani-6 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#cc7e63'
          stroke='#000'
          strokeWidth={0}
          d='M280.876 540h19.854v-1.717h-19.854Z'
          className='zr3-cls-74'
          style={{
            animation: 'zr3-ani-7 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#724e58'
          stroke='#000'
          strokeWidth={0}
          d='M302.715 540h19.854v-1.699h-19.854Z'
          className='zr3-cls-76'
          style={{
            animation: 'zr3-ani-8 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#4b565b'
          stroke='#000'
          strokeWidth={0}
          d='M324.555 540h19.854v-1.699h-19.854Z'
          className='zr3-cls-78'
          style={{
            animation: 'zr3-ani-9 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#d87c7c'
          stroke='#000'
          strokeWidth={0}
          d='M346.394 540h19.854v-1.717h-19.854Z'
          className='zr3-cls-60'
          style={{
            animation: 'zr3-ani-10 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#919e8b'
          stroke='#000'
          strokeWidth={0}
          d='M368.234 540h19.854v-1.645h-19.854Z'
          className='zr3-cls-62'
          style={{
            animation: 'zr3-ani-11 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#d7ab82'
          stroke='#000'
          strokeWidth={0}
          d='M390.073 540h19.854v-1.608h-19.854Z'
          className='zr3-cls-64'
          style={{
            animation: 'zr3-ani-12 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#6e7074'
          stroke='#000'
          strokeWidth={0}
          d='M411.912 540h19.854v-1.572h-19.854Z'
          className='zr3-cls-66'
          style={{
            animation: 'zr3-ani-13 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#61a0a8'
          stroke='#000'
          strokeWidth={0}
          d='M433.752 540h19.854v-1.536h-19.854Z'
          className='zr3-cls-68'
          style={{
            animation: 'zr3-ani-14 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#efa18d'
          stroke='#000'
          strokeWidth={0}
          d='M455.591 540h19.854v-1.645h-19.854Z'
          className='zr3-cls-70'
          style={{
            animation: 'zr3-ani-15 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#787464'
          stroke='#000'
          strokeWidth={0}
          d='M477.43 540h19.855v-1.59H477.43Z'
          className='zr3-cls-72'
          style={{
            animation: 'zr3-ani-16 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#cc7e63'
          stroke='#000'
          strokeWidth={0}
          d='M499.27 540h19.854v-1.572H499.27Z'
          className='zr3-cls-74'
          style={{
            animation: 'zr3-ani-17 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#724e58'
          stroke='#000'
          strokeWidth={0}
          d='M521.11 540h19.854v-1.337H521.11Z'
          className='zr3-cls-76'
          style={{
            animation: 'zr3-ani-18 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#4b565b'
          stroke='#000'
          strokeWidth={0}
          d='M542.949 540h19.854v-1.464h-19.854Z'
          className='zr3-cls-78'
          style={{
            animation: 'zr3-ani-19 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#d87c7c'
          stroke='#000'
          strokeWidth={0}
          d='M564.788 540h19.854v-1.175h-19.854Z'
          className='zr3-cls-60'
          style={{
            animation: 'zr3-ani-20 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#919e8b'
          stroke='#000'
          strokeWidth={0}
          d='M586.628 540h19.854v-1.265h-19.854Z'
          className='zr3-cls-62'
          style={{
            animation: 'zr3-ani-21 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#d7ab82'
          stroke='#000'
          strokeWidth={0}
          d='M608.467 540h19.854v-.903h-19.854Z'
          className='zr3-cls-64'
          style={{
            animation: 'zr3-ani-22 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#6e7074'
          stroke='#000'
          strokeWidth={0}
          d='M630.307 540h19.854v-1.157h-19.854Z'
          className='zr3-cls-66'
          style={{
            animation: 'zr3-ani-23 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fill='#61a0a8'
          stroke='#000'
          strokeWidth={0}
          d='M652.146 540H672v-.922h-19.854Z'
          className='zr3-cls-68'
          style={{
            animation: 'zr3-ani-24 1s cubic-bezier(.65,0,.35,1) both'
          }}
        />
        <path
          fillOpacity={0}
          stroke='#3c3c41'
          strokeWidth={0}
          d='M395 15h10v10h-10Z'
          className='zr3-cls-58'
        />
        <style>
          {
            '@keyframes zr3-ani-0{0%{d:path("M128 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M128 540l19.9 0l0 -475.2l-19.9 0Z")}}@keyframes zr3-ani-1{0%{d:path("M149.8 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M149.8 540l19.9 0l0 -465.6l-19.9 0Z")}}@keyframes zr3-ani-2{0%{d:path("M171.7 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M171.7 540l19.9 0l0 -465.6l-19.9 0Z")}}@keyframes zr3-ani-3{0%{d:path("M193.5 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M193.5 540l19.9 0l0 -465.6l-19.9 0Z")}}@keyframes zr3-ani-4{0%{d:path("M215.4 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M215.4 540l19.9 0l0 -460.8l-19.9 0Z")}}@keyframes zr3-ani-5{0%{d:path("M237.2 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M237.2 540l19.9 0l0 -460.8l-19.9 0Z")}}@keyframes zr3-ani-6{0%{d:path("M259 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M259 540l19.9 0l0 -456l-19.9 0Z")}}@keyframes zr3-ani-7{0%{d:path("M280.9 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M280.9 540l19.9 0l0 -456l-19.9 0Z")}}@keyframes zr3-ani-8{0%{d:path("M302.7 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M302.7 540l19.9 0l0 -451.2l-19.9 0Z")}}@keyframes zr3-ani-9{0%{d:path("M324.6 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M324.6 540l19.9 0l0 -451.2l-19.9 0Z")}}@keyframes zr3-ani-10{0%{d:path("M346.4 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M346.4 540l19.9 0l0 -456l-19.9 0Z")}}@keyframes zr3-ani-11{0%{d:path("M368.2 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M368.2 540l19.9 0l0 -436.8l-19.9 0Z")}}@keyframes zr3-ani-12{0%{d:path("M390.1 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M390.1 540l19.9 0l0 -427.2l-19.9 0Z")}}@keyframes zr3-ani-13{0%{d:path("M411.9 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M411.9 540l19.9 0l0 -417.6l-19.9 0Z")}}@keyframes zr3-ani-14{0%{d:path("M433.8 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M433.8 540l19.9 0l0 -408l-19.9 0Z")}}@keyframes zr3-ani-15{0%{d:path("M455.6 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M455.6 540l19.9 0l0 -436.8l-19.9 0Z")}}@keyframes zr3-ani-16{0%{d:path("M477.4 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M477.4 540l19.9 0l0 -422.4l-19.9 0Z")}}@keyframes zr3-ani-17{0%{d:path("M499.3 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M499.3 540l19.9 0l0 -417.6l-19.9 0Z")}}@keyframes zr3-ani-18{0%{d:path("M521.1 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M521.1 540l19.9 0l0 -355.2l-19.9 0Z")}}@keyframes zr3-ani-19{0%{d:path("M542.9 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M542.9 540l19.9 0l0 -388.8l-19.9 0Z")}}@keyframes zr3-ani-20{0%{d:path("M564.8 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M564.8 540l19.9 0l0 -312l-19.9 0Z")}}@keyframes zr3-ani-21{0%{d:path("M586.6 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M586.6 540l19.9 0l0 -336l-19.9 0Z")}}@keyframes zr3-ani-22{0%{d:path("M608.5 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M608.5 540l19.9 0l0 -240l-19.9 0Z")}}@keyframes zr3-ani-23{0%{d:path("M630.3 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M630.3 540l19.9 0l0 -307.2l-19.9 0Z")}}@keyframes zr3-ani-24{0%{d:path("M652.1 540l19.9 0l0 0l-19.9 0Z")}to{d:path("M652.1 540l19.9 0l0 -244.8l-19.9 0Z")}}.zr3-cls-58:hover{pointer-events:none}.zr3-cls-60:hover{cursor:pointer;fill:#ed8888}.zr3-cls-62:hover{cursor:pointer;fill:#9fad98}.zr3-cls-64:hover{cursor:pointer;fill:#ecbc8f}.zr3-cls-66:hover{cursor:pointer;fill:#797b7f}.zr3-cls-68:hover{cursor:pointer;fill:#6ab0b8}.zr3-cls-70:hover{cursor:pointer;fill:#ffb19b}.zr3-cls-72:hover{cursor:pointer;fill:#847f6e}.zr3-cls-74:hover{cursor:pointer;fill:#e08a6c}.zr3-cls-76:hover{cursor:pointer;fill:#7d5560}.zr3-cls-78:hover{cursor:pointer;fill:#525e64}'
          }
        </style>
      </svg>
    </article>
  );
};
