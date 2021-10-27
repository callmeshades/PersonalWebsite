import React from 'react'
import Container from './Container'
import ProjectCard from './ProjectCard'

export default function AllProjects() {
    return (
        <Container>
            <h2 className="font-bold text-2xl mb-6">All Projects (1)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                <ProjectCard
                    bgImage="ordermerch.png"
                    name="OrderMerch"
                    description={`
                        Approached by a current client if I could create an API and dashboard for merchandise. This is integrated directly into one of their apps for ordering, creating, and shipping globally. I run this service myself, most of it being hands-free.
                    `}
                />
                <ProjectCard
                    bgImage="scrapingbytes.png"
                    name="ScrapingBytes"
                    description={`
                        Personal project created in 2020. This is an API as a service. It enables you to scrape websites that use JavaScript and avoid headless browser detection. Rotating residential proxies, HTTP requests, chrome, and much more.
                    `}
                />
                <ProjectCard
                    bgImage="badfoodco.jpg"
                    name="B.A.D. Food Co"
                    description={`
                        I was in charge of choosing the technologies for this project. The goal of the project was to convert from WooCommerce to Shopify. The theme was recreated based on designs provided.
                    `}
                />
                <ProjectCard
                    bgImage="vellabio.jpg"
                    name="Vella Bioscience"
                    description={`
                        Worked directly with the lead developer. Extended the Shopify theme by creating new sections for use across the website. Created most components for the media kit page.
                    `}
                />
                <ProjectCard
                    bgImage="ragenjewels.jpg"
                    name="RAGEN Jewels"
                    description={`
                        Extended the headless store with multiple different features and bug fixes. Worked alongside the lead developer. New features included account section, wishlist, contacting, wholesaler and admin sections. 
                    `}
                />
                <ProjectCard
                    bgImage="regalytics.png"
                    name="RegAlytics"
                    description={`
                        Search, save, filter and query daily regulatory updates. Saved searches can be scheduled to send daily email reports via excel. One of my biggest projects to date.
                    `}
                />
                <ProjectCard
                    bgImage="fiuti.png"
                    name="Fiuti"
                    description={`
                        Google Ads SKAG generator. I have extended the platform with an admin dashboard, integration with AppSumo, and much more. Working regularly with the client to solve and API depreciation, bug fixes, and more.
                    `}
                />
                <ProjectCard
                    bgImage="fitness-1.jpg"
                    name="Personal Trainers & Clients"
                    description={`
                        Application allows personal trainers to create programs to assign to their clients. Originally created in VueJS but migrated to React.
                    `}
                />
                <ProjectCard
                    bgImage="foreman-reports.png"
                    name="Foreman's Report"
                    description={`
                        SPA to allow Foreman's to fill out daily reports on site. Reports can be downloaded as a PDF. The application can be used on tablet, mobile and desktop. This is in use daily.
                    `}
                />
                <ProjectCard
                    bgImage="first-pass.jpg"
                    name="First Pass Oilfield Inc"
                    description={`
                        The owner of the company had specific requirements and features for their website and in the process we settled on creating a custom CMS.
                    `}
                />
                <ProjectCard
                    bgImage="alphaready.png"
                    name="AlphaReady"
                    description={`
                        Founded in 2017. The whole business, and website was designed and developed by myself. I still work with a few clients occasionally.
                    `}
                />
            </div>
        </Container>
    )
}
