import { useRef, useState } from "react";

const User = ({ name, message }) => (
	<div>
		<p>{name}</p>
		<p>{message}</p>
	</div>
  );

function Comment () {
	return (
		<div>
			<User/>
		</div>
	);
}

export default Comment;