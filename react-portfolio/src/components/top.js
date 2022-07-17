import React from 'react';
import profileBanner from '../images/front-page-main-body-image2.jpg';

// <!-- Displaying the text inside the image on TOP -->
function Top() {
    return (<section class="relative">
            <img class="cover" src={profileBanner} alt="display image" />
            <p class="main-image-header">PORTFOLIO</p>
    </section>)
}

export default Top;