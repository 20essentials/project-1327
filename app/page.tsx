import { Suspense } from 'react';
import { GraphicBar } from '@/components/GraphicBar';
import { GraphicLineChart } from '@/components/GraphicLineChart';
import { Skeleton } from '@/components/Skeleton';

const graphicBarMilliseconds = 3000;
const graphicLineChartMilliseconds = 5000;

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <Skeleton
            message={`This component render in ${graphicBarMilliseconds}ms`}
          />
        }
      >
        <GraphicBar renderTime={graphicBarMilliseconds} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            message={`This component render in ${graphicLineChartMilliseconds}ms`}
          />
        }
      >
        <GraphicLineChart renderTime={graphicLineChartMilliseconds} />
      </Suspense>
    </>
  );
}
