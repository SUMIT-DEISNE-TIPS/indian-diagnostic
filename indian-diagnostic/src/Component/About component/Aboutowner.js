import React from 'react'
import founderimg from './founder.jpg'

function Aboutowner() {
    return (
        <>
            <div class="founder">
                <img src={founderimg} alt="" />
                <div class="details">
                    <span class="founder-name">ATANU JANA</span>
                    <span class="position">Founder & Owner</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Maiores cumque veniam pariatur, esse dolore eveniet quaerat odit
                        asperiores reiciendis delectus sit ea, quae voluptatibus amet sunt
                        id explicabo dignissimos quam recusandae, facilis impedit expedita
                        earum. Deleniti possimus magni accusantium similique officiis voluptates
                        ducimus, consequuntur labore et commodi corporis culpa ullam?</p>
                    <button>Contact Me</button>
                </div>
            </div>

        </>
    )
}

export default Aboutowner

