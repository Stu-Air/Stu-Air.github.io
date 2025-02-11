var darkmode = 0;


if (darkmode == 0) {

/***** DARKMODE ******/
/* light */
document.querySelector(':root').style.setProperty('--text', 'black');
document.querySelector(':root').style.setProperty('--darkmode', '#fff');
} else {
/* dark */
document.querySelector(':root').style.setProperty('--darkmode', 'var(--darkGray)');
document.querySelector(':root').style.setProperty('--text', '#fff');
}