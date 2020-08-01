import React from "react";
import Introduction from "../components/home/introduction";
import Projects from "../components/projects";


function Home() {
    return (
        <div>
            <div className="w-full">
                <div className="container mx-auto px-5">
                    <Introduction/>
                </div>
            </div>
            <div>
                <div className="container mx-auto px-5">
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default Home;