function showFile() {
    var fileSelect = document.getElementById("file-select");
    var fileName = fileSelect.options[fileSelect.selectedIndex].value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("file-content").innerHTML = this.responseText;
          }
        };
    xhttp.open("GET", fileName, true);
    xhttp.send();
}

      