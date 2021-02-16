var number = 1; //numer zdjęcia
let timer1 = 0; //timer odmierzajacy ponowne wywołanie funkcji do wyświetlenia zdjecia
let timer2 = 0; //timer domierzajacy czas do schowania zdjęcia

//Funkcja schowania zdjęcia
function Hide()
{
    $("#slider").fadeOut(500); //funkcja biblioteki jquery z 0,5s animacją zanikania zdjęcia 
}

//Funkcja rozpoczynująca pracę slidera
function StartSlider()
{
    ChangePhoto(); //wywołanie funkcji zmiany zdjęcia
    timer1 = setInterval("ChangePhoto()", 5000); //ustawienie cyklicznego wywoływania funkcji zmiany zdjęcia co 5 sekund
}

//Funkcja do zmiany zdjęcia
function ChangePhoto()
{
    //Sprawdzany jest numer zdjęcia który powinien być w tej chwili wyświetlony
    if (number == 1)
    {
        //Dodanie zdjęcia w polu o odpowiednim id
        document.getElementById("slider").innerHTML = "<img src = \"../images/" + firstPartOfFileName + number+".jpg\" class=\"photo1\"/>";
        //Ustawienie kropek pokazujących które zdjecie jest aktualnie wyświetlane
        document.getElementById("c1").style.background = "#ffffff";
        document.getElementById("c2").style.background = "#333333";
        document.getElementById("c3").style.background = "#333333";
        //Opóźnienie wyświetlania zdjecia
        $("#slider").fadeIn(500);
        //Ustawienie numeru nastęonego zdjecia
        number++;
    }
    //Analogicznie
    else if (number == 2)

    {   document.getElementById("c1").style.background = "#333333";
        document.getElementById("c2").style.background = "#ffffff";
        document.getElementById("c3").style.background = "#333333";
        document.getElementById("slider").innerHTML = "<img src = \"../images/" + firstPartOfFileName + number +".jpg\" class=\"photo2\"/>";
        $("#slider").fadeIn(500);
        number++;
    }
    else if (number == 3)
    {
        document.getElementById("slider").innerHTML = "<img src = \"../images/" + firstPartOfFileName + number +".jpg\" class=\"photo3\"/>";
        document.getElementById("c1").style.background = "#333333";
        document.getElementById("c2").style.background = "#333333";
        document.getElementById("c3").style.background = "#ffffff";
        $("#slider").fadeIn(500);
        //Przy ostatnim zdjęciu numer ustawiany jest ponowanie na 1
        number = 1;
    }
    //Ukrycie zdjęcia za 4,5sekundy, ponieważ 0,5s trwa animacja schowania zdjecia
    timer2 = setTimeout("Hide()", 4500)
}

//Funkcja wywoływana po kliknięciu na kropkę do przełączania zdjęć, jako argument przyjmuje numer zdjecia do wyświetlenia
function SetPicture(pictureNumber)
{
    //Reset tiemrów
    clearTimeout(timer1);
    clearTimeout(timer2);
    //Ustawienie wybranego zdjecia do wyświetlenia
    number = pictureNumber;
    //Schowanie aktualnego zdjęcia
    Hide();
    //Po 0,5s, bo tyle trwa schowanie zdjęcia, wywoływany jest start slidera z ustawionym numerem zdjęcia do wyświetlenia
    setTimeout("StartSlider()", 500);
}