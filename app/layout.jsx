import "@/styles/reset.css"
import "@/styles/global.css"

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="container">{children}</body>
		</html>
	);
}
