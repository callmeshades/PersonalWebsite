import React from "react";
import UserBar from "../usersbar";

function Introduction() {
    return (
        <div className="py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                <img className="w-40 h-40 rounded-full border mr-8 mb-4 md:mb-0"
                    src="https://avatars2.githubusercontent.com/u/47875643?s=460&u=7834b196a1dd9cdf81a69ec3b105323b8f18c86f&v=4"
                    alt="Brandon Nilsson"/>
                <div>
                    <h1 className="text-5xl font-semibold text-black">Brandon Nilsson <span role="img" className="animated-hand-emoji" aria-label="waving">🍁</span></h1>
                    <p className="text-2xl text-gray-800 mb-2">
                        I'm a developer who likes building things for people.
                    </p>
                    <hr/>
                    <p className="mt-2 mb-2 text-gray-700 text-lg">Development, Design, Marketing, Business</p>
                    <p className="text-gray-600 mb-2">Living in Grande Prairie, Alberta.</p>
                    <UserBar/>
                </div>
            </div>
        </div>

    )
}

export default Introduction;