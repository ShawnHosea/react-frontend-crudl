export default function Form() {
	return (
	  <form action="https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product" method="post">
		<div>
		  <label htmlFor="name">Name</label>
		  <br></br>
		  <input className="border rounded border-zinc-400 w-6/12" id="name" type="text" />
		</div>
		<div className="mt-4">
		  <label htmlFor="message">Message</label>
		  <br></br>
		  <textarea className="border rounded border-zinc-400 w-6/12" id="message" />
		</div>
		<button className="mt-4 p-2 rounded text-white bg-zinc-900 hover:bg-zinc-700" type="submit">Submit</button>
	  </form>
	);
  }