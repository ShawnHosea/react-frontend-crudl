import { useEffect, useState } from "react";
// import DelButton from './delButton';

function Cards() {

  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'
//   let endpointDelete = `https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products/${result.productID}`
  const [getResult, setGetResult] = useState([]);
  const [deleteResult, setDeleteResult] = useState(null);

  useEffect(() => {
	fetch(endpoint)
    .then(res => {    
		/* IF statement checks server response: .catch() does not do this! */ 
        // if (res.ok) { console.log("HTTP request successful") }
        // else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => setGetResult(data)) // the data
    .catch(error => console.log(error)) // error handling
    /* .catch handles a failure with fetch (e.g. syntax error, no internet connection) */ 
  }, [])
//   console.log(getResult)

  async function deleteDataById() {
    // const id = delete_id.current.value;

	console.log('HERE', getResult)
      try {
        const res = await fetch(`https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/${result.productID}`, { method: "delete" });

        const data = await res.json();

        const result = {
          data: data,
        };
		console.log(result)
        setDeleteResult(fortmatResponse(result));
      } catch (err) {
        setDeleteResult(err.message);
      }
  }
 
  return (
    <div>
		<div className="flex justify-between items-center border-b border-zinc-400 mb-4 pb-4">
			<h1 className='text-3xl'>Output</h1>
		</div>
		{getResult.map(result => (
			<div key={result.productID} className="mb-4 border rounded border-zinc-400 p-5">
			<h3 className="text-2xl">{result.name}</h3>
			<p className="mt-4">{result.message}</p>
			<div className="flex justify-between items-center mt-4">
				<small>{result.createdDate}</small>
				<div>
					<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" onClick={deleteDataById}>Delete</button>
				</div>
			</div>
		</div>
		))}
		
    </div>
  );
}

export default Cards;
