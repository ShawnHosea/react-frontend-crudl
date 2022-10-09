import { useEffect, useState } from "react";
// import DelButton from './delButton';

function Cards() {

  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products'
//   let endpointDelete = `https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products/${result.productID}`
  const [getResult, setGetResult] = useState([]);
  const [getDelete, setGetDelete] = useState([]);

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
  console.log(getResult)

//   useEffect (() => {
//     fetch(`https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products/${result.productID}`, {
// 	method: "DELETE",
//     headers: {
//     	'Content-type': 'application/json',
//     }
// 	})
// 	.then(res => {    
// 		/* IF statement checks server response: .catch() does not do this! */ 
//         // if (res.ok) { console.log("HTTP request successful") }
//         // else { console.log("HTTP request unsuccessful") }
//         return res
//     })
//     .then(res => res.json())
//     .then(data => setGetDelete(data)) // the data
//     .catch(error => console.log(error)) // error handling
//     /* .catch handles a failure with fetch (e.g. syntax error, no internet connection) */ 
//   }, [])
 
  return (
    <div>
		<div className="flex justify-between items-center border-b border-zinc-400 mb-4 pb-4">
			<h1 className='text-3xl'>Output</h1>
			<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" >Get All</button>
		</div>
		{/* <div>{getResult}</div> */}
		{getResult.map(result => (
			<div key={result.productID} className="mb-4 border rounded border-zinc-400 p-5">
			<h3 className="text-2xl">{result.name}</h3>
			<p className="mt-4">{result.message}</p>
			<div className="flex justify-between items-center mt-4">
				<small>{result.createdDate}</small>
				<div>
					{/* <a href="" >Delete</a> */}
					<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" >Delete</button>
				</div>
			</div>
		</div>
		))}
		
    </div>
  );
}

export default Cards;
