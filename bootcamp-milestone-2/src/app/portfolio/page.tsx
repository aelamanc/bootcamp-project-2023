import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Portfolio(){
    return(
        <>
        <main>
        <h1 className="page-title">Portfolio</h1>
        <div className = "about animate">
        <div className="project">
          <Link href="/">
            <Image src = {"/homepage.png"} width = {300} height = {500} alt ="Homepage"></Image>
          </Link>
          <div className="project-details">
            <p className="project-name">My Personal Website</p>
            <p className="project-description">A website showcasing my profile and projects.</p>
            <a href="/">Learn More</a>
          </div>
        </div>
        </div>
      </main> 
      </>
    )
}