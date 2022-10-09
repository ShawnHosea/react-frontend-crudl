import Head from 'next/head'
import Layout from '../components/layout';
import Form from '../components/form';
import Cards from '../components/cards';
// import { useEffect, useState } from "react";


export default function Home() {
  
  // let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'
  // const [getResult, setGetResult] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch(endpoint)
  //   if (!response.ok) {
  //     throw new Error('Data coud not be fetched!')
  //   } else {
  //     return response.json()
  //   }
  // }



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
