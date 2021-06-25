// import Link from "next/link";
// import MainSection from "./sections/MainSection";
import MobileNavigation from "./MobileNavigation";
// import RightSidebar from './sections/RightSidebar';

import Navbar from "./Navbar";

const meta = {
    siteName: "Developer's Book",
};


export default function MainAppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <MobileNavigation />


            {children}


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
