<?php

/**
*	Buecher-Verwaltung API Bridge
*
*	@Author Marco Langfeld
*	@Date 20/4/2020
*
*	Usage: $ab = new ApiBridge();
*
*          $bm->getBuchliste()
*          "https://openlibrary.org/api/books?format=json&bibkeys=isbn:0451526538"
*
*/

class ApiBridge {

    protected $url;
    protected $isbn;
    protected $searchword;

    /**
     * ISBN zu JSON
     */
    function getJsonFromISBN() {

        // Auf ISBN pruefen
        $this->checkISBN();

        // Auf URL pruefen
        $this->checkURL();

        // Abfrage durchfuehren
        return file_get_contents( $this->getURL() . urlencode($this->getISBN()) );

    }

    /**
     * Wort zu JSON
     */
    function getJsonFromWord() {

        // Auf ISBN pruefen
        $this->checkSuchwort();

        // Auf URL pruefen
        $this->checkURL();

        // Abfrage durchfuehren
        return file_get_contents( $this->getURL() . urlencode($this->getSuchwort()) );

    }

    /**
     * Auf ISBN pruefen
     */
    function checkISBN() {
        if(null === $this->getISBN()) {
            http_response_code(404);
            die('ISBN nicht gesetzt');
        }
    }

    /**
     * ISBN setzen
     */
    function setISBN($ISBN) {
        $this->isbn = $ISBN;
        return true;
    }

    /**
     * ISBN zurueck geben
     */
    function getISBN() {
        return $this->isbn;
    }

    /**
     * Auf URL pruefen
     */
    function checkURL() {
        if(null === $this->getURL()) {
            http_response_code(404);
            die('URL nicht gesetzt');
        }
    }

    /**
     * URL setzen
     */
    function setURL($URL) {
        $this->url = $URL;
        return true;
    }

    /**
     * URL zurueck geben
     */
    function getURL() {
        return $this->url;
    }

    /**
     * Auf Suchwort pruefen
     */
    function checkSuchwort() {
        if(null === $this->getSuchwort()) {
            http_response_code(404);
            die('Suchwort nicht gesetzt');
        }
    }

    /**
     * Suchwort setzen
     */
    function setSuchwort($Suchwort) {
        $this->searchword = $Suchwort;
        return true;
    }

    /**
     * Suchwort zurueck geben
     */
    function getSuchwort() {
        return $this->searchword;
    }

}


