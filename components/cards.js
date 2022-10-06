import { useRef, useState } from "react";

function Cards() {

  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'

  const [getResult, setGetResult] = useState(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getAllData() {
    try {
      const res = await fetch(endpoint);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const result = await res.json();
	
      setGetResult(formatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  console.log(getResult)
  return (
    <div>
		<div className="flex justify-between items-center border-b-2 mb-4 pb-4">
			<h1 className='text-3xl'>Output</h1>
			<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" onClick={getAllData}>Get All</button>
		</div>
		<div><pre>{getResult}</pre></div>
    </div>
  );
}

export default Cards;
