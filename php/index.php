<?php

// Redbean PHP einbinden
require 'rb-mysql.php';

// SQL Datenbank in /tmp erzeugen
R::setup('mysql:host=localhost;dbname=buchverwaltung', 'root', '');

// Neueste Features von Redbean nutzen
R::useFeatureSet('novice/latest');

// Langfeld BookManager einbinden
require 'bookmanager.php';
$bm = new Bookmanager();

// Langfeld BookManager einbinden
require 'apibridge.php';
$ab = new ApiBridge();
$url_isbn = "https://openlibrary.org/api/books?format=json&jscmd=data&bibkeys=isbn:";
$url_word = "https://openlibrary.org/search.json?q=";

// Je nach Anfrage-Methode unterscheiden
$request_method = $_SERVER["REQUEST_METHOD"];
if($request_method == 'GET') {

    // Ein Buch oder mehrere anzeigen?
    if(isset($_GET["id"]) && $bm->setId( $_GET["id"] )) {

        // Ein Buch anzeigen
        echo $bm->getBuch();

    }
    else {

        // Alle Buecher ausgeben
        echo $bm->getBuchliste();

    }
    exit;

}
elseif ($request_method == 'POST') {

    // Axios Uebergabe parsen
    $POST = json_decode(file_get_contents("php://input"), true);

    // Was soll nun gemacht werden?
    if(!empty($POST['action'])) {

        // Uebergebene Aktion auslesen
        $action = $POST["action"];

        if(isset($POST["id"]) && $bm->setId( $POST["id"] )) {

            // Buch bearbeiten oder hinzufuegen
            if($action == "save") {
                $bm->setFormdata($POST);
                echo $bm->setBuch();
                exit;
            }

            // Buch ausleihen
            if($action == "lent") {
                $bm->setLeihstatus(1);
                echo $bm->setBuchLeihstatus();
                exit;
            }

            // Buch zurueck geben
            if($action == "return") {
                $bm->setLeihstatus(0);
                echo $bm->setBuchLeihstatus();
                exit;
            }

            // Buch entfernen
            if($action == "del") {
                echo $bm->delBuch();
                exit;
            }

        }

        // Api Bridge nutzen (ISBN)
        if($action == "api_isbn") {
            if(isset($POST["isbn"]) && $ab->setISBN( $POST["isbn"] ) && $ab->setURL( $url_isbn )) {

                echo $ab->getJsonFromISBN();
                exit;

            }
        }

        // Api Bridge nutzen (ISBN)
        if($action == "api_search") {
            if(isset($POST["searchword"]) && $ab->setSuchwort( $POST["searchword"] ) && $ab->setURL( $url_word )) {

                echo $ab->getJsonFromWord();
                exit;

            }
        }

    }

    // Invalid Request Method
    header("HTTP/1.0 405 Method Not Allowed");
    exit;

}
else {

    // Invalid Request Method
    header("HTTP/1.0 405 Method Not Allowed");
    exit;

}

// DB-Verbindung schließen
R::close();

// Text anzeigen
echo '0';

