var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
function homePageLoading() {
    url = 'http://bitcoin.mubiz.com/block/bitcoin_block/';
    elementID = '../../bitcoin.index.html';
    fonctionRequeteApi(url, elementID);

    
}


xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();
		
