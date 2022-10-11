import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  let endpoint = 'https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product'
  
  let handleSubmit = async (e) => {
    e.preventDefault();
	setName("");
	setMessage("");
	console.log('name:', name);
	console.log('message:', message);

	
    try {
      let res = await fetch(endpoint, {
        method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		},
        body: JSON.stringify({
          name: name,
          message: message,
        }),
      });
	
     await res.json();
      if (res.status === 201) {
        setName("");
        setMessage("");
      } else {
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
	  <div className="flex justify-between items-center border-b border-zinc-400 pb-4">
	  	<h1 className='text-3xl'>Form</h1>
	  </div>
	  	
			<input className="mt-4 p-3 border rounded border-zinc-400 w-9/12"
			type="text"
			value={name}
			placeholder="Name"
			onChange={(e) => setName(e.target.value)}
			/>
		
		
			<textarea className="mt-4 p-3 border rounded border-zinc-400 w-9/12"
			type="text"
			value={message}
			placeholder="Message"
			onChange={(e) => setMessage(e.target.value)}
			/>
		
	  	<button className="block mt-4 p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;