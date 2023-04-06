import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image'

export default function Birth() {
    return (
      <><Layout>
        <Head>
          <title>Hobby</title>
        </Head>
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