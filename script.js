var isChecked = document.getElementById('checkbox');


function toggle(){ 
     if (isChecked.checked == true) {
        /* light */
        document.querySelector(':root').style.setProperty('--text', '#fff');
        document.querySelector(':root').style.setProperty('--darkmode', 'var(--darkGray)');

    } else if (isChecked.checked == false) {
        /*  dark */
        document.querySelector(':root').style.setProperty('--text', 'black');
        document.querySelector(':root').style.setProperty('--darkmode', '#fff');
    }
    return;
}
