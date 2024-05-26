import { Inter } from "@next/font/google"

import "@/styles/reset.css"
import "@/styles/global.css"


const interFontFamily = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={interFontFamily.className}>
			<body className="container">{children}</body>
		</html>
	);
}
