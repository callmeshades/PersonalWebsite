import React from 'react'

export default function Project() {
    return (
        <div>
            <div className="flex items-start gap-x-5">
                <div className="w-1/3">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                            src="fitness-1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-cyan-300 font-semibold text-2xl">
                        Personal Trainers/Clients
                    </h2>
                    <p className="text-cyan-100 leading-loose">
                        Application allows personal trainers to create programs
                        to assign to their clients. Originally created in VueJS
                        but migrated to React. Currently deployed in beta for
                        friends and users to try. Users can log their progress
                        weekly/daily for the program assigned to them.
                    </p>
                </div>
            </div>
        </div>
    )
}
