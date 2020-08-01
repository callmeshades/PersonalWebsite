import React from "react";
import { GitHub, Linkedin, Mail } from "react-feather";


function UserBar() {
    const UserLink = (props) => {
        return (
            <div className="text-black hover:text-gray-600 cursor-pointer mr-4">
                <a href={props.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="underline text-lg hover:text-blue-500 transition duration-150"
                >
                    {props.children}
                </a>
            </div>
        )
    };

    return (
        <div className="flex py-3">
            <UserLink link="https://www.github.com/callmeshades">
                <GitHub size={18}/>
            </UserLink>
            <UserLink link="https://www.linkedin.com/in/brandon-nilsson/">
                <Linkedin size={18}/>
            </UserLink>
            <UserLink link="mailto:brandonnilly@gmail.com">
                <Mail size={18}/>
            </UserLink>
        </div>
    )
}

export default UserBar;