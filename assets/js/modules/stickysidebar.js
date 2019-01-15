// Function to init sticky Sidebar

const $ = require('jquery');
require('sticky-sidebar');

// Importing constants to Javascript from CSS
// See: https://blog.bluematador.com/posts/how-to-share-variables-between-js-and-sass/
import styles from '../scss/style.scss';

export default function() {

    'use strict';

    let sidebar = new StickySidebar('.s-sidebar', {
        topSpacing: marginMedium,
        bottomSpacing: marginMedium,
        containerSelector: '.s-wrapper',
        innerWrapperSelector: '.s-sidebar__inner',
        minWidth: siteWidth,
    });

}
