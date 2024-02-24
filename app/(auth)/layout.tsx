import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Head from "next/head";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A next.js 14 Meta thread app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={`${inter.className} bg-dark-1`}>{children}</div>
    </ClerkProvider>
  );
}

// import { ClerkProvider } from '@clerk/nextjs'
// import '../globals.css'
 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (        
//     <ClerkProvider>
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     </ClerkProvider>
//   )
// }

