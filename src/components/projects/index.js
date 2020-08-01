import React from "react";
import {Award} from "react-feather";
import Project from "../project";
import AlphaReadyImage from '../../assets/img/ar.jpg';
import FirstPassImage from '../../assets/img/fp.jpg';
import ForemansReportImage from '../../assets/img/fr.jpg';
import MasterLifestyleImage from '../../assets/img/ms.jpg';


function Projects() {
    const allProjects = [
        {
            id: 1,
            name: 'AlphaReady',
            image: AlphaReadyImage,
            description: "Founded in 2017. The whole business/project including development and design was created by myself.\n" +
                "I still run AlphaReady for a few remaining clients.",
            source: null,
            link: "https://www.alphaready.co"
        },
        {
            id: 2,
            name: 'First Pass Oilfield Inc.',
            image: FirstPassImage,
            description: "Due to First Pass being a target for cyberattacks I created a custom CMS for them.\n" +
                "They have the ability to update all pages on their website, upload pictures of new equipment, receive emails as well as view them on the dashboard and more. Through the dashboard they can control the whole website and add additional users to help manage if required.",
            source: null,
            link: "https://www.firstpassoilfield.com"
        },
        {
            id: 3,
            name: 'Foreman\'s Report',
            image: ForemansReportImage,
            description: "I created a SPA (single page application) to allow Foreman's to fill out reports on site. The reports could be downloaded as a PDF. This allowed usage on mobile, tablet, and desktop!\n" +
                "This application is still in use daily on a Linode server.",
            source: null,
            link: null
        },
        {
            id: 4,
            name: 'Personal Trainers/Clients',
            image: MasterLifestyleImage,
            description: "Application allows personal trainers to create programs to assign to their clients. Originally created in VueJS but migrated to React.\n" +
                "Currently deployed in beta for friends and users to try. Users can log their progress weekly/daily for the program assigned to them.\n" +
                "Allows personal trainers to create exercises with pictures/videos, create days, assign exercises with reps, sets, and reps in reserve. Web application queries and saves to a Django backend. Hoping to expand this further and refactor existing code as skills improve.\n" +
                "A user login can be provided upon request.",
            source: "https://github.com/callmeshades/MasterLifestyleReact",
            link: "https://app.masterlifestyle.ca"
        }
    ];


    const projectslist = allProjects.reverse().map(item =>
        <div key={item.id}>
            <Project
                item={item}
            />
        </div>
    );

    return (
        <div>
            <div className="pt-5">
                <div className="w-full flex items-center justify-between">
                    <h4 className="font-semibold text-2xl">Projects</h4>
                    <div className="flex items-center w-2/3">
                        <div className="bg-blue-600 py-1 w-full mr-4" />
                        <Award size={32} className="text-blue-600" />
                    </div>
                </div>
            </div>
            <div>
                {projectslist}
            </div>
        </div>
    )
}

export default Projects;