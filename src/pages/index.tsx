import Head from 'next/head';
import { HomeContainer } from '@/app/containers/HomeContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minh</title>
        <meta name="description" content="Nguyencongminh.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <HomeContainer />
      </body>
    </div>
  );
}
