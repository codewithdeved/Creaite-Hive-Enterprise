// CSS File
import "@/shared/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../features/navbar/Navbar";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="bg-gradient-to-b from-gray-50 to-violet-50">
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}