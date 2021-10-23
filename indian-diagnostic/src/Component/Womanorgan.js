import React from 'react'
import anemia from '../assets/Women/Anemia.png'
import hormone from '../assets/Women/Hormone.png'
import iron from '../assets/Women/Iron.png'
import pregnancy from '../assets/Women/Pregnancy.png'
import vitamin from '../assets/Women/Vitamin.png'

function Womanorgan() {
    return (
        <>
            <section>
                <div class="test-header">
                    <p>
                        <span class="a">Women Care</span>
                        <button><span class="b">view all <i class="fas fa-angle-double-right"></i></span></button>
                    </p>
                </div>
                <div class="worgans_list">
                    <div class="worgans"><img src={pregnancy} alt="Pregnancy" /><span>Pregnancy</span></div>
                    <div class="worgans"><img src={anemia} alt="Anemia" /><span>Anemia</span></div>
                    <div class="worgans"><img src={hormone} alt="Hormone" /><span>Hormone</span></div>
                    <div class="worgans"><img src={iron} alt="Iron" /><span>Iron Study</span></div>
                    <div class="worgans"><img src={vitamin} alt="Vitamin" /><span>Vitamin</span></div>
                </div>
            </section>
        </>
    )
}

export default Womanorgan
