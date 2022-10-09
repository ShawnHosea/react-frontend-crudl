import { useEffect, useState } from "react";

function DelButton() {

  let endpoint = `https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/`
  const [delResult, setDelResult] = useState(null);

  const deleteData = async () => {
    const response = await fetch(endpoint, {
	method: "DELETE",
    headers: {
    	'Content-type': 'application/json',
    }
	})
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response
    }
  }

//   useEffect(() => {
//     deleteData()
//       .then((res) => {
//         setDelResult(res.map(result => 
// 			<div key={result.productID}>
// 				<a href={deleteData} className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700">Delete</a>
// 			</div>
// 			))
//       })
//       .catch((e) => {
//         console.log(e.message)
//       })
//   }, [])

	console.log(delResult)
 
  return (
  
	<div>{delResult}
	<a  className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700">Delete</a>
	</div>
   
  );
}

export default DelButton;
