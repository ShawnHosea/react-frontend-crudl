import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';



export default function TestPage() {
	return (
	  <Layout>
		<Head>
		  <title>Test Page</title>
		</Head>
		<h1>Test Page</h1>
	  </Layout>
	);
  }