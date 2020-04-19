<?php

/**
*	Buecher-Verwaltung
*
*	@Author Marco Langfeld
*	@Date 19/4/2020
*
*	Usage: $bm = new Bookmanager();
*
*          $bm->getBuchliste()
*		   $bm->getBuch()
*          $bm->setBuch()
*          $bm->createBuchliste()
*          $bm->setId($id), $bm->getId(), $bm->checkId()
*          $bm->setFormdata($form), $bm->getFormdata(), $bm->checkFormdata()
*          $bm->setLeihstatus($form), $bm->getLeihstatus(), $bm->checkLeihstatus()
*          $bm->setBuchLeihstatus();
*          $bm->delBuch();
*
*/

class BookManager {

    protected $id;
    protected $formdata;
    protected $leihstatus;

    /**
     * Alle Buecher ausgeben
     */
    function getBuchliste() {

        // Bohne (alle DB-Eintraege) laden
        $buecher = R::findAll('books');

        // Array erzeugen
        $array = R::exportAll($buecher);

        // Rueckgabe
        return json_encode($array);
        exit;

    }

    /**
     * Bestimmtes Buch ausgeben
     */
    function getBuch() {

        // Auf ID pruefen
        $this->checkId();

        // Bohne (DB-Eintrag) laden
        $buch = R::load('books', $this->getId());

        // Rueckgabe
        return $buch;
        exit;

    }

    /**
     * Buch speichern (Neu und Update)
     */
    function setBuch() {

        // Auf ID pruefen
        $this->checkId();

        // Auf Formdaten pruefen
        $this->checkFormdata();

        // Insert oder update?
        if($this->getId() > 0) {

            // Bohne (DB-Eintrag) laden
            $buch = R::load('books', $this->getId());

        }
        else {

            // Bohne (DB-Eintrag) vorbereiten ;)
            $buch = R::dispense('books');

        }

        // Neue Werte setzen
        $values = $this->getFormdata();
        $buch->title     = $values['title'];
        $buch->subtitle  = $values['subtitle'];
        $buch->author    = $values['author'];
        $buch->isbn      = $values['isbn'];
        $buch->text      = $values['text'];
        $buch->lent      = $values['lent'];

        // Bohne (DB-Eintrag) speichern (oder updaten)
        // Je nachdem, ob ein vorhandenes geladen wurde
        // oder ein neues "dispensed" wurde.
        $this->setId( R::store($buch) );

        // ID zurueck geben Rueckgabe
        return $this->getId();
        exit;

    }

    /**
     * Buch ausleihen
     */
    function setBuchLeihstatus() {

        // Auf ID pruefen
        $this->checkId();

        // Auf Leihstatus pruefen
        $this->checkLeihstatus();

        // Bohne (DB-Eintrag) laden
        $buch = R::load('books', $this->getId());

        // Neuen Status setzen
        $buch->lent = $this->getLeihstatus();

        // Bohne (DB-Eintrag) speichern (oder updaten)
        R::store($buch, $this->getId());

        // Rueckgabe
        return $this->getLeihstatus();
        exit;

    }

    /**
     * Buch entfernen
     */
    function delBuch() {

        // Auf ID pruefen
        $this->checkId();

        // Bohne (DB-Eintrag) laden
        $buch = R::load('books', $this->getId());

        // Bohne (DB-Eintrag) Eintrag loeschen
        R::trash($buch);

        echo "1";
        exit;

    }

    /**
     * Buchliste mit 4 Beispiel-Buechern in DB anlegen
     */
    function createBuchliste() {

        // Bohne (DB-Eintrag) vorbereiten ;)
        $buch = R::dispense('books', 4);

        // Bohne (DB-Eintrag) anpassen
        $buch[0]->title = 'Perry Rhodan 1';
        $buch[0]->subtitle = 'Unternehmen Stardust';
        $buch[0]->author = 'K. H. Scheer';
        $buch[0]->isbn = '9783845300009';
        $buch[0]->text = 'Der Flug der STARDUST, die von Nevada Fields aus ferngesteuert wird, verläuft zunächst planmäßig. Die Mondlandung steht kurz bevor, sie soll in der Nähe des Mondsüdpols in der Region des Newcomb-Kraters erfolgen. Doch kurz vor der Landung überlagert ein Störsignal die Fernsteuerung. Nur Perry Rhodans blitzschneller Reaktion ist es zu verdanken, dass die Rakete nicht abstürzt, sondern die sofortige automatische Notlandung auf der erdabgewandten Seite des Mondes durchgeführt wird. Bevor die Funkverbindung mit der Erde abreißt, strahlt der Autopilot den codierten Notruf QQRXQ ab, dem das Kontrollzentrum entnehmen kann, dass die STARDUST vermutlich von einer feindlichen Macht angegriffen wurde. Bei der Notlandung wird das Schiff leicht an einer der Landestützen beschädigt, doch dies kann mit Bordmitteln behoben werden. Allerdings ist auch die Funkanlage zerstört. Perry Rhodan verlässt die STARDUST, nachdem die  Wikipedia-logo.png Radioaktivität an der Landestelle abgeklungen ist, und betritt als erster Mensch den Mond. Auf der Erde sind die Verantwortlichen um General Lesly Pounder ratlos, aber der Chef der International-Intelligence-Agency, Allan D. Mercant, ahnt, dass hier etwas Besonderes vor sich geht. Rhodans letzter Funkspruch weckt die Vermutung, dass die fehlgeschlagene Mondlandung auf einen Angriff der Asiatischen Föderation zurückzuführen sein könnte, denn sie ist die einzige andere Macht auf der Erde, die derzeit in der Lage wäre, eine Mondmission durchzuführen – doch die von der AF auf den Weg geschickte Rakete ist kurz nach dem Start explodiert. Auf Mercants Befehl hin wird Nevada Fields durch das Militär abgeriegelt. (Wikipedia)';
        $buch[0]->lent = false;

        // Bohne (DB-Eintrag) anpassen
        $buch[1]->title = 'Perry Rhodan 2';
        $buch[1]->subtitle = 'Das Mutantenkorps';
        $buch[1]->author = 'K. H. Scheer';
        $buch[1]->isbn = 'B0056AB5NA';
        $buch[1]->text = 'Das Notsignal des auf dem Mond havarierten arkonidischen Schiffes lockt fremde Intelligenzen ins Solsystem. Die Menschheit, von Perry Rhodan gerade vor der atomaren Selbstvernichtung bewahrt, sieht sich den gefährlichen Individualverformern gegenüber. Perry Rhodan entdeckt auf dem Planeten Venus eine uralte Basis, die er in den Besitz der von ihm gegründeten Dritten Macht bringen kann. Dort schult er parapsychologisch begabte Menschen, positive Mutanten mit ungewöhnlichen Fähigkeiten. Doch kaum ist die Gefahr der Individualverformer von den Mutanten abgeschlagen, tauchen in dem nur 27 Lichtjahre von der Erde entfernten Wega-System neue Feinde auf, deren Ziel ursprünglich die Erde war. Zusammen mit seinen Freunden vom Mutantenkorps wagt Perry Rhodan an Bord des arkonidischen Beiboots GOOD HOPE den Sprung in das ferne Wega-System, wo der Arkonide Crest die Welt der Unsterblichkeit vermutet. Am Ziel trifft Perry Rhodan auf einen zu allem entschlossenen Gegner! , die Topsider. Wie er ihnen mit Hilfe des Mutantenkorps die Stirn bietet und außerdem noch das Volk der Ferronen vor dem Untergang bewahrt, schildert dieses Buch. (Amazon)';
        $buch[1]->lent = true;

        // Bohne (DB-Eintrag) anpassen
        $buch[2]->title = 'Perry Rhodan 3';
        $buch[2]->subtitle = 'Der Unsterbliche';
        $buch[2]->author = 'K. H. Scheer';
        $buch[2]->isbn = 'B0056AB4C2';
        $buch[2]->text = 'Bei ihrer Rückkehr in das 27 Lichtjahre von der Erde entfernte Wega-System stoßen Perry Rhodan und seine Freunde abermals auf die eroberungssüchtigen Topsider. Perry Rhodan und die Mutanten nehmen den Kampf gegen die Invasoren auf und finden dabei die Spur, die zum Planeten des ewigen Lebens führen soll. Doch der Weg dorthin ist mit tödlichen Gefahren gepflastert, die zu überwinden den ganzen Mut und alle Intelligenz der irdischen Raumfahrer in Anspruch nimmt. Ein geheimnisvolles Volk hat in ferner Vergangenheit die Spur ausgelegt. Wer das Ziel jedoch erreichen will, muß zahlreiche galaktische Rätsel lösen. Perry Rhodan und seine Freunde brechen mit der STARDUST II auf, um dieser Spur zu folgen. Sie führt in die ferne Vergangenheit, auf eine Welt mit energiesaugenden Wesen, auf den Planeten der Mausbiber und schließlich zum größten aller galaktischen Rätsel überhaupt - nach Wanderer, der Heimat des Unsterblichen. Wie Rhodan und die terranischen Raumfahrer ! Aufgabe für Aufgabe lösen und schließlich einer unheimlichen Existenzform gegenüberstehen, schildert dieser Roman. (Amazon)';
        $buch[2]->lent = false;

        // Bohne (DB-Eintrag) anpassen
        $buch[3]->title = 'Perry Rhodan 4';
        $buch[3]->subtitle = 'Der kosmische Lockvogel';
        $buch[3]->author = 'K. H. Scheer';
        $buch[3]->isbn = 'B0056AB5TE';
        $buch[3]->text = 'Geheimnisvolle Sabotageakte gegen die von Perry Rhodan gegründete Dritte Macht erschüttern den gerade erreichten Frieden. Ein geheimnisumwitterter Unbekannter, der sich Overhead nennt, hat Perry Rhodan den Kampf angesagt. Der Overhead verfügt über hypnotische Kräfte, und eine seiner stärksten Waffen ist ein gefährlicher Mutant. Perry Rhodan und seine Freunde vom Mutantenkorps sind so sehr mit der Zurückschlagung des Overhead beschäftigt, daß das Eindringen fremder Raumfahrer ins Solsystem fast unbemerkt vonstatten geht. Als Rhodan sich dieser neuen und bedrohlichen Entwicklung zuwenden kann, ist es schon fast zu spät. Nur noch ein Bluff vermag der Menschheit zu helfen. Perry Rhodan macht den jungen Raumkadetten Julian Tifflor zum kosmischen Lockvogel, um das Rätsel der Fremden zu lösen. Dabei stößt er auf eine außerirdische Machtgruppe, die Einfluß in allen wichtigen Gebieten der Milchstraße zu haben scheint. Es sind die Springer, die ein galaktisches Handelsmonopol aufgebaut haben. Sie verzeihen Rhodan nicht, daß er auf Ferrol im Wegasystem einen kleinen Handelsstützpunkt errichtet hat. Ehe sie sichs versehen, sind Perry Rhodan und seine Freunde in kosmische Querelen verstrickt, deren Konsequenzen für die gerade in den Weltraum aufbrechende Menschheit überhaupt noch nicht übersehen werden können. (Amazon)';
        $buch[3]->lent = false;

        // Bohne (DB-Eintrag) speichern (oder updaten)
        $id = R::storeAll( $buch );

    }

    /**
     * Auf ID pruefen
     */
    function checkId() {
        if(null === $this->getId()) {
            http_response_code(404);
            die('ID nicht gesetzt');
        }
    }

    /**
     * ID setzen
     */
    function setId($id) {
        $this->id = intval($id);
        return true;
    }

    /**
     * ID zurueck geben
     */
    function getId() {
        return $this->id;
    }

    /**
     * Auf Formdaten pruefen
     */
    function checkFormdata() {
        if(null === $this->getFormdata()) {
            http_response_code(404);
            die('Formdaten nicht gesetzt');
        }
    }

    /**
     * Formulardaten setzen
     */
    function setFormdata($form) {
        $this->formdata = $form;
    }

    /**
     * Formulardaten zurueck geben
     */
    function getFormdata() {
        return $this->formdata;
    }

    /**
     * Auf Leihstatus pruefen
     */
    function checkLeihstatus() {
        if(null === $this->getLeihstatus()) {
            http_response_code(404);
            die('Leihstatus nicht gesetzt');
        }
    }

    /**
     * Leihstatus setzen
     */
    function setLeihstatus($leihstatus) {
        $this->leihstatus = intval($leihstatus);
        return true;
    }

    /**
     * Leihstatus zurueck geben
     */
    function getLeihstatus() {
        return $this->leihstatus;
    }

}