import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
export default function FirstPost() {
    return (
      <><Layout>
        <Head>
          <title>My INFO</title>
        </Head>
        <h1>My INFO</h1>
        <h2>Name: CHUNG HEE GYEONG</h2>
        <h2>HANYANG univ. INFO_SYS</h2>
        <h1>Birth</h1>
        <h2>2004.08.18</h2>
        <h2>in Daejeon</h2>
        <h2>Very cute baby came out to world!</h2>
        <Image src="/images/IMG_0973.jpeg"
        width={570}
        height={381}/>
        <h1>Hobby</h1>
        <h2>Photography</h2>
        <h2>Doing phone on the bed</h2>
        <h2>Rhythm game</h2>
        <Image src="/images/image-2.jpeg"
        width={381}
        height={570}/>

        <h2>
          <Link href="/">← more info about CHG</Link>
        </h2>
      </Layout><>
          <div>
            <style jsx global>{`
  html,
  body {
    padding: 3rem;
    margin: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`}</style>
          </div></></>
    );
  }
  