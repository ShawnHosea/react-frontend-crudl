import Head from 'next/head'
import Layout from '../components/layout';
import Form from '../components/form';
import Cards from '../components/cards';

export default function Home() {
  
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className='grid lg:grid-cols-2 gap-10 mt-5 px-5'>
            <div>
              <Form/>
            </div>

            <div>
              <Cards/>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
