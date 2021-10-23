import React from 'react'
import anup from './ANUP.jpg'
import soumya from './SOUMYADIP.jpg'
import susmita from './SUSMITA.jpg'
import alam from './ALAM.jpg'

function Aboutteam() {
    return (
        <>


            <div class="about-team">
                <h2><span>OUR TEAM</span></h2>
                <div class="members">
                    <div class="member-details"><img src={anup} alt="" /><span class="name">ANUP PAUL</span><span class="position">LAB-TECHNOLOGIST</span></div>
                    <div class="member-details"><img src={soumya} alt="" /><span class="name">SOUMYADIP MAITY</span><span class="position">PHLEBOTOMIST</span></div>
                    <div class="member-details"><img src={susmita} alt="" /><span class="name">SUSMITA MAITY</span><span class="position">RECEPTIONIST</span></div>
                    <div class="member-details"><img src={alam} alt="" /><span class="name">SK.NANJUL ALAM</span><span class="position">PHLEBOTOMIST</span></div>
                </div>
            </div>



        </>
    )
}

export default Aboutteam
