
/*
**
Script to get knives (pictures, names, prices) from original website (knifecenter.com)


all info about knives was taken from here
-->

https://www.knifecenter.com/kc_new/store_store.html?brand=234&min_price=100&max_price=500&country=&design=&steel=&c=&locktype=&style=&min_blade=0&max_blade=50

with usage of simple dom-js

and saved into knifedb.json

**
*/

var knives = [];

var l = document.getElementsByClassName("product_name").length; //28

for (i=0; i<l; i++) {
	var knife = {};

	knife.title = document.getElementsByClassName("product_name")[i].title;
	knife.img = $( "img[alt*='Spyderco']" )[i].currentSrc;
	knife.price = document.getElementsByClassName("our_price")[i].innerText;

	knives.push(knife);
}

JSON.stringify(knives);
