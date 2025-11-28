export default function Button({ children, className, ...props }) {
	return (
		<button
			className={`py-4 px-6 bg-blue-500 text-preset-5 text-neutral-0  rounded-xl hover:bg-blue-700  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-neutral-900 transition-all duration-200 cursor-pointer border-0 outline-0 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
