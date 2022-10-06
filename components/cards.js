import { useRef, useState } from "react";

function Cards() {

  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'

  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getAllData() {
    try {
      const res = await fetch(endpoint);
	//   console.log(res)

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();
	  console.log(data)

      const result = {
        status: res.status + "-" + res.statusText,
		mode: "no-cors",
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
		  "Access-Control-Allow-Origin": '*'
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };

      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }
  return (
    <div>
		<h1>Hello Word</h1>
		<button className="mt-4 p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" onClick={getAllData}>Get All</button>
		<p>{getResult}</p>
		<div><pre>{getResult}</pre></div>
    </div>
  );
}

export default Cards;