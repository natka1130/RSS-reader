function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


// 		 	kraj  swiat  sport  biznes  rozrywka
// wp
// interia
// tvn
// rmf
// polsat		


//TABLICA Z KANALAMI	
var channels = [
	["http://wiadomosci.wp.pl/kat,1342,ver,rss,rss.xml","http://wiadomosci.wp.pl/kat,1342,ver,rss,rss.xml","http://media.wp.pl/kat,1022955,ver,rss,rss.xml","http://media.wp.pl/kat,1022947,ver,rss,rss.xml","http://wp.tv/ver,rss,chn,4052,rss.xml"],
	["http://wp.tv/ver,rss,chn,4052,rss.xml","http://fakty.interia.pl/swiat/feed","http://sport.interia.pl/feed","http://kanaly.rss.interia.pl/biznes.xml","http://fakty.interia.pl/kultura/feed"],
	["http://fakty.interia.pl/kultura/feed","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml","http://www.tvn24.pl/wiadomosci-ze-swiata,2.xml"],
	["http://www.rmf24.pl/fakty/polska/feed","http://www.rmf24.pl/fakty/swiat/feed","http://www.rmf24.pl/sport/feed","http://www.rmf24.pl/ekonomia/feed","http://www.rmf24.pl/ekonomia/feed"],
	["http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/kraj.xml","http://www.polsatnews.pl/rss/rozrywka.xml"]
]

//Szablon dodawania pojedyńczego newsa na stronie
const Item = ({ title, link, description }) => `
    <div class="item">
      <h3>${title}</h3>
      <span class="item-description">${description} <a href="${link}" class="item-link">więcej..</a></span>
    </div>
`;