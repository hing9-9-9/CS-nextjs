import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image'


export default function Birth() {
    return (
      <><Layout>
        <Head>
          <title>Birth</title>
        </Head>
        <h1>Birth</h1>
        <h2>2004.08.18</h2>
        <h2>in Daejeon</h2>
        <h2>Very cute baby came out to world!</h2>
        <Image src="/images/IMG_0973.jpeg"
        width={570}
        height={381}/>


        <h2>
          <Link href="/">← more info about CHG</Link>
        </h2>
      </Layout><div>
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
        </div></>
    );
  }