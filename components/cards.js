import { useEffect, useState } from "react";

function Cards() {

  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'
  const [getResult, setGetResult] = useState([]);
  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  const fetchData = async () => {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setGetResult(res.map(result => 
		<div key={result.productID} className="mb-8 border rounded border-zinc-400 p-5">
			<p>{result.name}</p>
			<p>{result.message}</p>
			<p>{result.createdDate}</p>
		</div>))
		
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

	console.log(getResult)
 
  return (
    <div>
		<div className="flex justify-between items-center border-b-2 mb-4 pb-4">
			<h1 className='text-3xl'>Output</h1>
			<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" onClick={fetchData}>Get All</button>
		</div>
		<div>{getResult}</div>
		
    </div>
  );
}

export default Cards;
