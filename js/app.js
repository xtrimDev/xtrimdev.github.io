const tab = document.getElementsByClassName("tab");
function activeTab () {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('active')) {
            let text = tab[i].innerText;
            return text.trim().toLowerCase().replace(' ', '-')
        } 
    }
}

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

function DownloadResume() {
    var fileName = "SameerSinghBhandariResume.pdf";
    //Set the File URL.
    var url = "../pdf/" + fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};

PDFObject.embed("../pdf/SameerSinghBhandariResume.pdf", "#pdfResume");