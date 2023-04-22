function searchBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    
    if (title == "" || author == "") {
        alert("Please fill out both fields!");
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "book.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("title=" + title + "&author=" + author);
    }
}