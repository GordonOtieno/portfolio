import React from 'react'
import Title from '../components/Title'
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.PNG'
import email from '../img/email.PNG'
import location from '../img/location.PNG'

function ContactPage() {
    return (
        <div>
            <div className="title">
            <Title title= {`Contact`} span= {`Contact`}/>
            </div>
            <div className="ContactPage">
           
           <div className="map-sect">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813395728096!2d36.81656421463091!3d-1.285988035988266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0db3a18cf%3A0xcdc55667d519b432!2sGPO%20Stage!5e0!3m2!1sen!2ske!4v1619857336741!5m2!1sen!2ske" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
           </div>
           <div className="contact-sect">
           <ContactItem icon={phone} text1={'+254707077499'} text2={'254780886059'} title={'phone'}/>
           <ContactItem icon={email} text1={'otienogordon95@gmail.com'} text2={'otienogordon95@yahoo.com'} title={'Email'}/>
           <ContactItem icon={location} text1={'P.O Box 42849 – 00100'} text2={'Nairobi'} title={'Address'}/>
           </div>
            
           
       </div>
        </div>
    )
}

export default ContactPage
