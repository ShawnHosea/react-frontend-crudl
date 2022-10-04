import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className='grid lg:grid-cols-2 gap-4 mt-5 px-5'>
            <div>
              <h1 className='text-3xl text-center'>Form</h1>
              <form>
                <input></input>
              </form>
            </div>

            <div>
              <h1 className='text-3xl text-center'>Output</h1>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
