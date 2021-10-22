import React from 'react'
import bone from '../assets/Organ/bone.png'
import heart from '../assets/Organ/heart.png'
import kidney from '../assets/Organ/kidney.png'
import liver from '../assets/Organ/liver.png'
import lungs from '../assets/Organ/lungs.png'
import stomach from '../assets/Organ/stomach.png'
import thyroid from '../assets/Organ/thyroid.png'
import body from '../assets/Organ/body.png'

const Organ = () => {
    return (
        <>
            <section>
                <div class="test-header">
                    <p>
                        <span class="a">Most Vital Organs</span>
                        <button><span class="b">view all <i class="fas fa-angle-double-right"></i></span></button>
                    </p>
                </div>
                <div class="organs_list">
                    <div class="organs"><img src={bone} alt="Bone" /><span>Bone</span></div>
                    <div class="organs"><img src={thyroid} alt="Thyroid" /><span>Thyroid</span></div>
                    <div class="organs"><img src={stomach} alt="Stomach" /><span>Stomach</span></div>
                    <div class="organs"><img src={lungs} alt="Lungs" /><span>Lungs</span></div>
                    <div class="organs"><img src={liver} alt="Liver" /><span>Liver</span></div>
                    <div class="organs"><img src={heart} alt="Heart" /><span>Heart</span></div>
                    <div class="organs"><img src={kidney} alt="Kidney" /><span>Kidney</span></div>
                    <div class="organs"><img src={body} alt="Body" /><span>Body</span></div>
                </div>
            </section>
        </>
    )
}

export default Organ
