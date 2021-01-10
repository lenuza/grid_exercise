var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
    } else {
        document.getElementById('header').style.top = '-15em';
    }
    prevScrollpos = currentScrollPos;
}

// show back to top scroll, using this tuttorial as a guide https://getflywheel.com/layout/sticky-back-to-top-button-tutorial/
const backToTop = () => {
    const scollToTop = document.getElementById('scrollBack');
    let y = window.scrollY;

    if (y > 0) {
        scollToTop.className = 'back-to-top show';
    } else {
        scollToTop.className = 'back-to-top hide';
    }
}

window.addEventListener('scroll', backToTop);
// scroll back to top of page
document.getElementById('scrollBack').addEventListener('click', () => {
    window.scrollTo(0, 0);
})


// section four animation
const whenScrlBottom = () => {
    // https://coursesweb.net/javascript/
    var win_h = self.innerHeight ? self.innerHeight : document.body.clientHeight; // gets window height

    // gets current vertical scrollbar position
    var scrl_pos = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

    var hundPix = 100;

    // if scrollbar reaches bottom of page
    if (document.body.scrollHeight <= (scrl_pos + win_h)) {
        document.getElementById('section4-item-one').classList.add('animate-item-one-medium', 'animate-item-one-large');
        document.getElementById('section4-item-two').classList.add('animate-item-two-medium', 'animate-item-two-large');
        document.getElementById('section4-item-three').classList.add('animate-item-three-medium', 'animate-item-three-large');
        document.getElementById('section4-item-four').classList.add('animate-item-four-medium', 'animate-item-four-large');
    }
    // if scrollbar moves up from bottom
    if (document.body.scrollHeight > (scrl_pos + win_h)) {
        document.getElementById('section4-item-one').classList.remove('animate-item-one-medium', 'animate-item-one-large');
        document.getElementById('section4-item-two').classList.remove('animate-item-two-medium', 'animate-item-two-large');
        document.getElementById('section4-item-three').classList.remove('animate-item-three-medium', 'animate-item-three-large');
        document.getElementById('section4-item-four').classList.remove('animate-item-four-medium', 'animate-item-four-large');
    }

}

// register event on scrollbar
window.addEventListener('scroll', whenScrlBottom);

