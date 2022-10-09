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
	  console.log("RIGHT HERE",res)
     await res.json();
      if (res.status === 201) {
        setName("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
	  <div className="flex justify-between items-center border-b border-zinc-400 mb-2 pb-4">
	  	<h1 className='text-3xl'>Form</h1>
	  	<button className="p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" type="submit">Create</button>
	  </div>
	  	<div>
			<input className="mt-2 border rounded border-zinc-400 w-6/12"
			type="text"
			value={name}
			placeholder="Name"
			onChange={(e) => setName(e.target.value)}
			/>
		</div>
		<div className="mt-4">
			<textarea className="border rounded border-zinc-400 w-6/12"
			type="text"
			value={message}
			placeholder="Message"
			onChange={(e) => setMessage(e.target.value)}
			/>
		</div>
  
      </form>
    </div>
  );
}

export default Form;