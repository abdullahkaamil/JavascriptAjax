var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        /*  var modify = document.getElementsByTagName('li');
          for (var i = 0; i < modify.length; i++) {
              modify[i].innerHTML = request.responseText;
          }
*/
        console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

        var items = request.responseXML.getElementsByTagName('name');
        var output = '<ul>';
        for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();