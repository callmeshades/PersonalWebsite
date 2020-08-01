import React, {useState} from "react";


function ApplicationWindow(props) {
    const [deleted, setDeleted] = useState(false);

    const DeletedComponent = () => {
        return (
            <div className="flex flex-col justify-center">
                <p className="text-center">You monster! <span role="img" aria-label="Angry Face Emoji">😠</span></p>
                <button className="bg-green-400 hover:bg-green-600 px-3 py-1 text-white mt-2"
                        onClick={() => setDeleted(!deleted)}
                >Sorry! Take me back..</button>
            </div>
        )
    }

    return (
        <div className="shadow-xl">
            <div className="w-full bg-gray-600 py-2 flex justify-end pr-3">
                {
                    deleted ?
                        ""
                        :
                        <div className="px-3 py-3 bg-red-300 rounded-full hover:bg-red-500 cursor-pointer"
                            onClick={() => setDeleted(!deleted)}
                        />
                }
            </div>
            <div className="bg-white px-5 py-4">
                <div className="flex flex-col lg:flex-row w-full mb-5 md:items-center justify-center">
                    {
                        deleted ?
                            <DeletedComponent/>
                            :
                            props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default ApplicationWindow;