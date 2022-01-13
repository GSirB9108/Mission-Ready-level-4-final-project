import React from 'react'
import TopbarProjects from './projects/topbarprojects'
import Header from './projects/header'
import Footer from './homepage/footer';
import Library from './projects/library'

export default function Projects() {
    return (
        <div>
            <TopbarProjects />
            <Header />
            <Library/>
            <Footer />
        </div>
    )
}
