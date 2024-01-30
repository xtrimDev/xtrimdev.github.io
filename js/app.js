const tab = document.getElementsByClassName("tab");
function activeTab () {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('active')) {
            let text = tab[i].innerText;
            return text.trim().toLowerCase().replace(' ', '-')
        } 
    }
}

document.getElementById(activeTab()).style.display = 'block';

for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = () => {
        if (!tab[i].classList.contains('active')) {
            for (let j = 0; j < tab.length; j++) {
                tab[j].classList.remove('active');
            }

            tab[i].classList.add('active');

            for (let j = 0; j < tab.length; j++) {
                if (tab[j].classList.contains('active')) {
                    try {
                        document.getElementById(tab[j].innerText.trim().toLowerCase().replace(' ', '-')).style.display = 'block';
                    } catch (e) {
                        // console.log('"' + tab[j].innerText.trim().toLowerCase().replace(' ', '-') + '" id does not exist.');
                    }
                } else {
                    let select = document.getElementById(tab[j].innerText.trim().toLowerCase().replace(' ', '-'));
                    if (select) {
                        select.style.display = 'none'
                    }
                }
            }
        }
    }
}

function goto(url)  {
    window.open(url, "_blank")
}