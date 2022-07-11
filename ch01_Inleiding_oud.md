# Inleiding

Het Digikoppeling beheermodel beschrijft hoe de governance van de
Digikoppeling is ingericht, welke overleggen adviseren en beslissen
over de standaard en hoe wijzigingsverzoeken in behandeling worden
genomen. De basis van het beheermodel is BOMOS. BOMOS geeft
richtlijnen voor de inrichting van een open beheerproces voor
standaarden.

## Achtergrond

De Nederlandse Overheid Referentie Architectuur (NORA) positioneert
Digikoppeling als de logistieke laag voor standaardisatie van
communicatie tussen systemen bij overheidsorganisatie op basis van
webservice standaarden. Digikoppeling is daardoor een laag die zich
bevindt tussen het transportnetwerk (b.v. Diginetwerk of Internet) en
de applicatielaag (functionele berichtinhoud). De systemen die
Digikoppeling gebruiken zijn zowel frontoffice-systemen (die
interactie met burgers en bedrijven afhandelen) als systemen van
andere overheden en in het bijzonder de basisregistraties (zie
onderstaand figuur).

![Systemen die DIgikoppeling gebruiken](media/DK_Systemen_die_Digikoppeling_gebruiken.png "Systemen die DIgikoppeling gebruiken")

Doel van Digikoppeling is om door vergaande standaardisatie de
interoperabiliteit tussen overheden te bevorderen. Als de 'envelop'
van de 'berichten' is gestandaardiseerd kan ieder voorzieningen voor
postverzending inrichten die onafhankelijk zijn van de berichten in de
'envelop'.

De Digikoppeling standaard is door het College
Standaardisatie<sup>1</sup> in november 2007 geselecteerd als
standaard voor het Comply-or-Explain regime en in mei 2009 opnieuw
bekrachtigd. Het College stelde ook als eis dat een beheerproces voor
een goed te keuren standaard is ingericht. Dit document beschrijft
deze inrichting.

<sup>1</sup>: Het College Standaardisatie is begin 2018 voortgezet in het Overheidsbreed Beleidsoverleg Digitale Overheid (OBDO).

De Digikoppeling-standaard is binnen de overheid in gebruik bij
diverse organisaties, samenwerkingsverbanden en/of ketens. Een groot
aantal ICT leveranciers biedt ondersteuning aan de voor Digikoppeling
benodigde open standaarden (WUS, ebMS, https) in hun producten en
dienstverlening. De Digikoppeling standaard heeft de zich afgelopen
tijd ontwikkeld tot een volwassen standaard die in een grote en brede
community wordt ontwikkeld. Bij het beheer van de
Digikoppeling-standaard zijn veel verschillende organisaties betrokken
uit de gehele eOverheid. De voornaamste organisaties zijn ministeries,
Manifestpartijen, houders van basisregistraties en landelijke
voorzieningen, ketenpartijen, ICT leveranciers en gemeenten via
KING. Opdrachtgever voor Digikoppeling is het Ministerie van BZK.

Omdat de Digikoppeling standaard steeds meer en breder wordt gebruikt,
is het noodzakelijk dat het beheer en onderhoud voor alle
belang-hebbenden inzichtelijk en transparant is, duidelijk belegd is
en de doorontwikkeling releasematig plaatsvindt. Dit document geeft
hier invulling aan en beschrijft het beheermodel voor de
Digikoppeling-standaarden.

In dit beheermodel komen de volgende onderwerpen aan bod:

- Scope van het beheer, de te beheren objecten van Digikoppeling;

- Releasebeleid;

- Organisatie, participatievormen, processen voor het beheer en onderhoud;

- Informatievoorziening t.b.v. belanghebbenden inclusief communicatie en publicatie.

Voor het opstellen van dit document is zoveel mogelijk aangesloten bij
het beheermodel van StUF om de eenvormigheid van beheerprocessen bij
de eOverheid te bevorderen.

## Doel van document

Dit document beschrijft het beheermodel voor de
Digikoppeling-standaarden. Het geeft alle belanghebbenden inzicht in
het releasebeleid, in de wijze waarop het beheer van Digikoppeling is
belegd, hoe het proces van wijzigen en releaseplanning van de
Digikoppeling standaard eruit ziet en hoe de besluitvorming en
participatie is georganiseerd. Daarnaast komen aanvullende onderwerpen
aan de orde zoals release-nummering en de publicatie en
informatievoorziening rond Digikoppeling.

Door dit inzicht kunnen de belanghebbenden beter rekening houden met
en gebruik maken van de Digikoppeling standaard. Voor sommige
belanghebbenden, zoals basisregistraties en andere
informatieleveranciers binnen de eOverheid, is dit beheermodel van
belang voor de planning van hun ontwikkeling en onderhoud. Maar ook
ICT-leveranciers zullen, ieder op hun eigen manier, rekening moeten
houden met het beheermodel om ondersteuning te kunnen leveren aan de
betrokken overheidsorganisaties.

In Hoofdstuk 2 is het beheer op hoofdlijnen beschreven. Daarin komen
aan de orde: de afbakening van het beheer; de verschillende
belanghebbenden; de structuur van participatie en ondersteuning en het
releasebeleid.

In Bijlage A zijn de beheer- en onderhoudsprocessen beschreven; in
Bijlage B de informatievoorziening rond de Digikoppeling standaard en
in Bijlage C het gehanteerde begrippenkader. Tot slot komt in Bijlage
D en E een aantal overige onderwerpen aan de orde.

## Doelgroep van dit document

| Afkorting | Rol                             | Taak                                                                                                       | Doelgroep? |
|-----------|---------------------------------|------------------------------------------------------------------------------------------------------------|------------|
| [MT]      | Management                      | Bevoegdheid om namens organisatie (strategische) besluiten te nemen.                                       | Ja     |
| [PL]      | Projectleiding                  | Verzorgen van de aansturing van projecten.                                                                 | Ja     |
| [A&D]     | Analyseren & ontwerpen (design) | Analyseren en ontwerpen van oplossings-richtingen. Het verbinden van Business aan de IT.                   | Ja     |
| [OT&B]    | Ontwikkelen, testen en beheer   | Ontwikkelt, bouwt en configureert de techniek conform specificaties. Zorgen voor beheer na ingebruikname.  | Ja     |

## Bijdragen

Onderstaande personen hebben bijgedragen aan de totstandkoming van dit beheermodel:

- Tom Peelen, Logius stelselarchitect

- Peter Klaver, EGEM i-teams

- Peter Leijnse, Logius

- Egon Velders, BKWI

- Frans van Diepen, LNV

- Marcel Reuvers, GeoNovum

In de review-fase van het beheermodel is een belangrijke bijdrage geleverd door de volgende leden van het Technisch Overleg Digikoppeling:

- Sylvia Majdoubi, Kamers van Koophandel,

- Hans Lussing, ICTU/OverheidsDienstenPlatform,

- Paul Schlotter Logius,

- Jan Moggré, UWV,

- Bram Gaakeer, ministerie van OCW,

- Tom Vijlbrief, Kadaster,

- Maarten van den Broek, Waarderingskamer,

- Frans van Diepen, ministerie van LNV,

- Geurt-Jan van Renswoude, ICTU/eFormulieren,

- Hugo Heitmeijer, Belastingdienst,

- Tom Peelen, Logius stelselarchitect

Bij de toetsing met Bomos2i is een belangrijke bijdrage geleverd door:

- Marijke Salters, Logius Centrum voor Standaarden

- Lia van der Knijff, Logius projectleider Digikoppeling

- Tom Peelen, Logius stelselarchitect

## Licentie en patentrechten

Dit werk is gelicenseerd onder een Creative Commons Naamsvermelding 3.0 Unported licentie.

![Creative Commons Naamsvermelding 3.0 Unported licentie](media/CC_Logo3.0.png "Creative Commons Naamsvermelding 3.0 Unported licentie")

Meer informatie over de precieze voorwaarden van deze licentie vindt u
op de website van Creative Commons http://creativecommons.nl/ en
specifiek voor deze licentie een samenvatting onder
http://creativecommons.org/licenses/by/3.0/deed.nl en de volledige
licentietekst onder
http://creativecommons.org/licenses/by/3.0/legalcode.

Dit werk en de specificaties van de Digikoppeling-standaard worden
royaltee-free ter beschikking gesteld. Organisaties en personen die
bijdragen aan Digikoppeling dienen hun bijdragen vrij te geven zodanig
dat hieraan voldaan kan worden. Door bij te dragen aan Digikoppeling
verklaren zij hiermee in te stemmen.

Uitgesloten van alle bovenstaande zijn rechten verbonden aan de
standaarden, profielen en andere onderdelen waar Digikoppeling gebruik
van maakt. Hierop zijn de rechten van de betreffende standaarden,
profielen en andere onderdelen zelf van toepassing.