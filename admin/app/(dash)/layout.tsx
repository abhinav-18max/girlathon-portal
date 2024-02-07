"use client"
import '../globals.css'

import {Toaster} from "@/components/ui/toaster";
import ReactQueryProvider from "@/components/QueryClientProvider";
import Provider from "@/lib/authProvider";
import Navbar from "@/components/navbar";





export default function DashLayout({children,}: { children: React.ReactNode }) {
    return (<html lang="en">
    <body>

    <main className="h-screen  text-black bg-white">

        <Provider>
            <ReactQueryProvider>
                <Navbar/>
                {children}
                <Toaster/>
            </ReactQueryProvider>
        </Provider>



    </main>
    </body>
    </html>)
}
