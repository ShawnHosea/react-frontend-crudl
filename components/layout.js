import Link from 'next/link';
import ƒorm from '../components/form.js';

export default function Layout({ children }) {
	return <div className="">
	<div className="bg-zinc-900 pt-4 pb-4">
		<div className='px-5 flex justify-between items-center'>
			<h1 className="text-white font-bold text-2xl hover:text-yellow-400"><Link href="/"><a>CRUD Comments</a></Link></h1>
			<nav>
				<ul className="text-white hover:text-yellow-400">
					<li><Link href="/testpage">Test page</Link></li>
				</ul>
			</nav>
		</div>
	</div>
	{children}
	</div>;
  }