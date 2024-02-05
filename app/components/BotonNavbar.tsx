'use client'

import React from "react"

export default function BotonNavbar(prop:{idSeccion:string, clases:string, content:string}) {

    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

    return (
        <a onClick={() => scrollToSection(prop.idSeccion)} href="#" className={prop.clases}>
            <li>
                {prop.content}
            </li>
        </a>
    )
}