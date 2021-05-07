import React from 'react'
import ImageSection from '../components/ImageSection'
import ServiceSection from '../components/ServiceSection'
import SkillSection from '../components/SkillSection'
import Title from '../components/Title'
import design from '../img/design.jpg'
function AboutPage() {
    return (
        <div className="AboutPage" >
            <Title title= {`About Me`} span= {`Want To Know?`}/>
       <ImageSection />
        <Title title= {`My Skills`} span= {`My Skills`}/>
   <div className="skill-container">
   <SkillSection skill={`JavaScript`} progress={'90%'} width={'90%'}/>
   <SkillSection skill={`TypeScript`} progress={'80%'} width={'80%'}/>
   <SkillSection skill={`React Js`} progress={'70%'} width={'70%'}/>
   <SkillSection skill={`Node Js`} progress={'60%'} width={'60%'}/>
   <SkillSection skill={`Java`} progress={'60%'} width={'60%'}/>
   <SkillSection skill={`UI/UX`} progress={'70%'} width={'70%'}/>
   <SkillSection skill={`Web Design`} progress={'75%'} width={'75%'}/>
   </div>
   
   <Title title= {`Services`} span= {`Services`}/>
    <div className="Services-container">
        <ServiceSection image={design} title={'Web design'} text={'web designer'}/>
        <ServiceSection image={design} title={'Programming'} text={'Programmer'}/>
        <ServiceSection image={design} title={'Graphic design'} text={'Graphic designer'}/>
    </div>
        </div>
    )
}

export default AboutPage
