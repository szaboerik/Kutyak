$(function () {
//   tombMuveletek();
//    var e1 = {
//        Név:"Béla",
//        Kor:12,
//        Iskola:"ált Iskola"        
//    };

    tablazatbaKiir();

    $("#ok").click(mentes);
    $("article").on("click", "th", rendez);
//    $("article").delegate("hover", "th", kiemel);

}
);

var tomb = [
    {
        Név: "Bruno",
        Kor: 3,
        Faj: "Pitbull"
    },
    {
        Név: "Jenny",
        Kor: 6,
        Faj: "Puli"
    },
    {
        Név: "Pici",
        Kor: 9,
        Faj: "Husky"
    },
    {
        Név: "Dagi",
        Kor: 10,
        Faj: "Csivava"
    }
];
var irany = true;
function kiemel() {
    $(this).toggleClass("kiemel");
}


function mentes() {
    var kutyaObjektum = {
        név: $("#nev").val(),
        db: $("#kor").val(),
        cikkszám: $("#faj").val()
    };
    tomb.push(kutyaObjektum);
    tablazatbaKiir();
}

function tablazatbaKiir() {
    //írjuk ki a Néveket egy táblázatba 

    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr></tr>");
    for (var item in tomb[0]) {
        $("article table tr").append("<th id='" + item + "'>" + item + " </th>");

    }
    for (var i = 0; i < tomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tomb[i]) {
//            console.log("aktuális objektum " + JSON.stringify(tomb[i]));
//            console.log("aktuális kulcs: " + item);
//            console.log("aktuális kulcshoz tartozó elem: " + tomb[i][item]);
            $("article table tr").eq(i + 1).append("<td>" + tomb[i][item] + " </td>");

        }
        ;
    }

    $("article th").hover(kiemel);
}

function rendez() {
    var mezo = $(this).attr("id");

    if (mezo === "Kor") {
        // rendezzük a tömb kor szerint!
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return a[mezo] - b[mezo];
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return b[mezo] - a[mezo];
                    }
            );

        }

    } else {
        //rendezzük név szerint
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] > b[mezo]) - 0.5;
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] < b[mezo]) - 0.5;
                    }
            );
        }

    }
    irany = !irany;
    console.log("aktuális objektum " + JSON.stringify(tomb));
    tablazatbaKiir();
}






function rendezesek() {
    var tomb = ["Béla", "Jenő", "Anna", "Géza"];
    tomb.sort();

    $("article").append(tomb.join(" ; ") + "<br>");
    var szamTomb = [12, -3, 654, 4, 76];
    szamTomb.sort();
    $("article").append(szamTomb.join(" ; ") + "<br>");

    szamTomb.sort(
            function (a, b) {
//                console.log("a: "+a+" b: "+b+" a-b:"+(a-b));

                return b - a;
            }
    );


    $("article").append(szamTomb.join(" ; ") + "<br>");
    //véleltlen sorrend generálása
    tomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(tomb.join(" ; ") + "<br>");

    szamTomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(szamTomb.join(" ; ") + "<br>");
    szamTomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(szamTomb.join(" ; ") + "<br>");
}

function tombMuveletek() {
    var tomb = ["Béla", "Jenő", "Géza"];
//    var tomb=new Array("Béla","Jenő","Géza");
    tomb[1] = "Gizi";
//    tomb[tomb.length]="Réka";
    console.log(tomb.length);
    tomb.push("Réka", "Karcsi");//Tömb végére teszi az elemet
    console.log(tomb);
    tomb.pop();//a tömb utolsó elemének eltávolítása

    $("article").append(tomb.join(" ; ") + "<br>");
    tomb.shift();//A tömb első elemét távolítja el.
    $("article").append(tomb.join(" ; ") + "<br>");
//    tomb.splice(1,1);//Adott pozícióról adott számú elemet távolít el

    var reszTomb = tomb.slice(1, 3);//első indextől a második indexig

    $("article").append(reszTomb.join(" ; ") + "<br>");
    $("article").append(tomb.join(" ; ") + "<br>");
    tomb.splice(1, 2, "Feri");//Adott pozícióról adott számú elemet távolít el
    $("article").append(tomb.join(" ; ") + "<br>");

}



//window.addEventListener("load",init);
//function $(Név){
//    return document.querySelectorAll(Név);
//}
//function init() {
//    $("article")[0].innerHTML+="Hello";
//}