// import Link from "next/link";
import MainSection from "./sections/MainSection";
import MobileNavigation from "./MobileNavigation";
import RightSidebar from './sections/RightSidebar';

import Navbar from "./Navbar";

const meta = {
    siteName: "Developer's Book",
};


export default function MainAppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="pt-12 bg-gray-100 pb-12">
                <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                    <div className="xl:w-8/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                        {children}
                    </div>
                    <RightSidebar />
                </div>
            </main>
            <MobileNavigation />
            <footer className="border-t py-4">
                <p className="text-sm text-center">
                    Copyright © {new Date().getFullYear()}{" "}
                    <span className="font-semibold"> {meta.siteName} </span>
                    All Rights Reserved
                </p>
            </footer>
        </div>
    );
}
