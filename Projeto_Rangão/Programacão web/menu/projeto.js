$(function(){
    exibirMenu();
});

$(function(){
    exibirProdutos();
})


function exibirProdutos() {
    $.getJSON("menu/projeto.json", function(data){
        x = data.produtos.length;
        for(var i = 0; i < x; i++)
           {
            var div = '<div class="produtos"><h2>' 
            + data.produtos[i].Restaurante 
            + '<hr></h2><p>' 
            + data.produtos[i].nome 
            + '</p><p>' 
            + 'R$' 
            + data.produtos[i].valor 
            + '</p><button onclick="funcaobotao(\'' + data.produtos[i].nome 
            + '\',' + data.produtos[i].valor + ')" id=button><b> Adicionar </b></button></div>'
            $("#compras").append(div);
          }
    });
}


function funcaobotao(nome, valor){
    alert("Prato: " + nome + " adicionado ao carrinho!");
    //console.log("alouuu");
         localStorage.setItem(nome, valor);
}


function exibirMenu() {
    $.ajax({
        url: "menu/menu.xml",
        success: function (xml) {
            $(xml).find("list").each(function () {
                var link = '<a href="'+ $(this).attr("link") +'">' + $(this).text() + '</a><br>';
                $("#menu").append(link);
            });
        },
        error: function () {
            alert("Mensagem de erro.");
        }
    });
}


function soma(){
    let plus = 0;
    let quant = localStorage.length;

    for(var i=0; i<quant; i++){
        
        //console.log("passei por aqui!");
        var valorpratos = localStorage.getItem(localStorage.key(i));
       // console.log("passei por aqui2");
        plus=+ valorpratos + plus;
    };
    document.getElementById("plus").innerText = plus;
}

function getback(){
    let quant = localStorage.length;
    console.log(l);
    for(var i=0; i<quant; i++){
        let plate1 = localStorage.key(0);
        let plate2 = localStorage.key(1);
        let plate3 = localStorage.key(2);
        let plate4 = localStorage.key(3);
        let plate5 = localStorage.key(4);
        let plate6 = localStorage.key(5);

        l = plate1;
        m = plate2;
        n = plate3;
        p = plate4;
        q = plate5;
        r = plate6;
    };
    document.getElementById("l").innerText = l;
    document.getElementById("m").innerText = m;
    document.getElementById("n").innerText = n;
    document.getElementById("p").innerText = p;
    document.getElementById("q").innerText = q;
    document.getElementById("r").innerText = r;
}