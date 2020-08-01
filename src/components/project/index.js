import React from "react";
import {Code, Eye} from "react-feather";

function Project(props) {
    return (
        <div className="shadow-sm border rounded my-6">
            <div className="py-1 px-2 bg-blue-600 flex justify-end items-center">
                {
                    !props.item.source ?
                        <span className="text-gray-100">Email for a snippet</span>
                        :
                        <a href={props.item.source} target="_blank"
                           rel="noopener noreferrer"
                           className="ml-3 text-gray-100 hover:text-gray-300"
                        >
                            <Code size={18}/>
                        </a>
                }
                {
                    !props.item.link ?
                        <span/>
                        :
                        <a href={props.item.link} target="_blank"
                           rel="noopener noreferrer"
                           className="ml-3 text-gray-100 hover:text-gray-300"
                        >
                            <Eye size={18}/>
                        </a>
                }
            </div>
            <div className="flex items-center py-3 px-3">
                <img className="w-40 h-40 object-cover rounded border" src={props.item.image} alt={`${props.item.name}`}/>
                <div className="ml-4">
                    <p className="text-lg font-semibold mb-2">{props.item.name}</p>
                    <p style={{whiteSpace: 'pre-line'}}
                       className="text-gray-800">
                        {props.item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;