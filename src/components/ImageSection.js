import React from 'react'
import about from '../img/about.JPG'
import jspdf from 'jspdf'
function ImageSection() {
const downloadCV= ()=>{
  const pdf = new jspdf({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts:false,
    floatPrecision: 16 
  })
  //pdf.addImage(about,'jpg',65,20,400,400)
 // pdf.addPage()
  pdf.text(60,60, 'Thank you for Visiting. Working on the Cv')
  pdf.save('text.pdf')
}

    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="About image"/>
            </div>
            <div className="about-info">
                
                <h4>I am <span>Gordon Otieno</span></h4>
                <p className="about-text"> A graduate from Masinde Muliro 
                    University of Science and Technology (MMUST) 
                    with a degree in Computer Science,
                     Second Class Honours (Upper division award). 
                     He was a member at the Association of 
                     Computing Students (ACS) MMUST.
                    </p>

            
            <div className="about-details">
                <div className="left-section">
                    <p>Full Name</p>
                    
                    <>Nationality</>
                    <p>Languages</p>
                    <p>county</p>

                </div>
                <div className="right-section">
                    <p>:Gordon Otieno</p>
                    
                    <p>:Kenyan</p>
                    <p>:English, Swahili, Luo</p>
                    <p>:Kisumu</p>

                </div>
                
            </div>
            <button className ="btn" onClick={downloadCV}>DownLoad CV</button>
            </div >
        </div>
    )
}

export default ImageSection
