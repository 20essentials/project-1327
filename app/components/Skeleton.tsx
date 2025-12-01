import { ComponentProps } from 'react';

export const Skeleton = ({
  props = {},
  message
}: {
  props?: ComponentProps<'svg'>;
  message: string;
}) => {
  return (
    <article className='graphic'>
      <output className='graphic-message'>{message}</output>

      <svg aria-labelledby='loading-aria' viewBox='0 0 800 610' {...props}>
        <rect
          width='100%'
          height='100%'
          clipPath='url(#clip-path)'
          fill='url(#fill)'
        />
        <defs>
          <clipPath id='clip-path'>
            <rect x={-3} y={-16} rx={2} ry={2} width={800} height={610} />
          </clipPath>
          <linearGradient id='fill'>
            <stop offset={0.599964} stopColor='#f3f3f3'>
              <animate
                attributeName='offset'
                values='-2; -2; 1'
                keyTimes='0; 0.25; 1'
                dur='2s'
                repeatCount='indefinite'
              />
            </stop>
            <stop offset={1.59996} stopColor='#ecebeb'>
              <animate
                attributeName='offset'
                values='-1; -1; 2'
                keyTimes='0; 0.25; 1'
                dur='2s'
                repeatCount='indefinite'
              />
            </stop>
            <stop offset={2.59996} stopColor='#f3f3f3'>
              <animate
                attributeName='offset'
                values='0; 0; 3'
                keyTimes='0; 0.25; 1'
                dur='2s'
                repeatCount='indefinite'
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </article>
  );
};
