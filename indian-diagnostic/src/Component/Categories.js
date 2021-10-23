import React from 'react'
import fever from '../assets/Categories/Fever.png'
import human from '../assets/Categories/Human Body.png'
import infection from '../assets/Categories/Infiction.png'
import senior from '../assets/Categories/Senior Citizen.png'
import sugar from '../assets/Categories/sugar.png'
import woman from '../assets/Categories/Woman.png'

const Categories = () => {
    return (
        <>
            <section>
                <div class="test-header">
                    <p>
                        <span class="a">Most Popular Categories</span>
                        <button><span class="b">view all <i class="fas fa-angle-double-right"></i></span></button>
                    </p>
                </div>
                <div class="categories_list">
                    <div class="categories"><img src={woman} alt="Woman" /><span>Women Health</span></div>
                    <div class="categories"><img src={senior} alt="Senior Citizens" /><span>Senior Citizens</span></div>
                    <div class="categories"><img src={fever} alt="Fever" /><span>Fever</span></div>
                    <div class="categories"><img src={infection} alt="Infection" /><span>Infection</span></div>
                    <div class="categories"><img src={human} alt="Human Body" /><span>Full Body Checkup</span></div>
                    <div class="categories"><img src={sugar} alt="Diabetes" /><span>Diabetes</span></div>
                </div>
            </section>
        </>
    )
}

export default Categories
