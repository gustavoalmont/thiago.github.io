function carregaCSS(){
	var file = location.pathname.split( "/" ).pop();

	var link = document.createElement( "link" );
        link.href   = "https://gustavoalmont.github.io/thiago.github.io/style.css";
        link.type   = "text/css";
        link.rel    = "stylesheet";
        link.media  = "screen,print";

	document.getElementsByTagName( "head" )[0].appendChild( link );
}

function getInfo(info) {
    var script = document.querySelectorAll("script[src='https://gustavoalmont.github.io/thiago.github.io/whatsapp.js']");
    var info = script[0].getAttribute(info);

    return info;
}

function getById(id){
	var el = document.getElementById(id);
	return el;
}

function montar(){
	var mensagem_padrao = getInfo('wb-padrao');
	var number	= getInfo('wb-number');

    var montagem =  '<div id="wb-widget">' +
                        '<div id="wb-btn">' +
                            '<a href="https://api.whatsapp.com/send?phone=' + number + '&text=' + mensagem_padrao + '" target="_BLANCK">' +
                                '<img id="wb-icon" src="https://gustavoalmont.github.io/thiago.github.io/whatsapp-button.png" alt="Botão WhatsApp">' +
                            '</a>' +
                        '</div>' +
                    '</div>';

	return document.write( montagem );
}

function loadWb(){
	montar();
	carregaCSS();
}

window.onload = loadWb();
