import { useState } from 'react';
import { motion } from 'motion/react-client';

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: 'auto', opacity: 1 }}
			className='text-neutral-0 cursor-pointer flex flex-col gap-4'
		>
			<button onClick={() => setIsOpen((prev) => !prev)}>Option - 1</button>

			{isOpen && (
				<ul className='bg-neutral-0'>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			)}
		</motion.div>
	);
}
