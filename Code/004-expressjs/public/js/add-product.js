var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var arr = this.responseText
        console.log(arr);
        var j = JSON.parse(arr);
        var div = document.getElementById("list");
        var start = "<table id='table'>\
                    <tr>\
                        <th>Name</th>\
                        <th>Type</th>\
                        <th>Amount</th>\
                    </tr> ";
        var mid = "";
        var end = "</table>";
        for (const element of j) {
            console.log("<><><><><>");
            mid += "<tr>\
                        <td>"+ element.name + "</td>\
                        <td>"+ element.type + "</td>\
                        <td>"+ element.amount + "</td>\
                    </tr>";
        }

        var final = start.concat(mid, end);
        // console.log(final);
        div.innerHTML = final;
        document.getElementById('table').style.border = "thick solid #0000FF";
    }
}
request.open('GET', 'http://localhost:8000/admin/product/data');
request.send()

// setTimeout(() => {
//     document.getElementById('table').style.border = "thick solid #0000FF";
// }, 300);
