# Bijlage: Gebruik Github in het beheerproces

## Publicatie

## Wijzigingsvoorstellen

Het proces zoals beschreven onder
[operationeeel beheer, wensen en eisen](#wensen-en-eisen)
wordt voor de Logius standarden geïmplementeerd door gebruik te maken
van _github issues_. Een _issue_ kan binnen github ingediend worden
door iedere (github) gebruiker en wordt bij ontwikkeling van code
gebruikt om functionele wensen of gevonden bugs in te dienen zodat
deze door ontwikkelaars opgepakt kunnen worden. Een _issue_ kan
online besproken worden en uiteindelijk gesloten worden wanneer
deze verwerkt is.

### Branches

Binnen het standaardenbeheer bij Logius maken we gebruik van verschillende
branches. De _main_ branch bevat de laatste formeel geaccepteerde versie
van een document. De _develop_ branch bevat een werkversie met daarin alle
wijzigingen die in een volgende geaccepteerde versie opgenomen moeten
worden.

Aanpassingen in de documentatie die voor een specifiek wijzingsvoorstel
gemaakt worden worden in eigen branch verwerkt. Deze branch wordt geforked vanaf de _develop_ branch en wordt nadat het wijzigingsverzoek aangenomen
is teruggebracht naar de _develop_ branch. Voorbeeld: een wijzigingsverzoek
voor het aanpassen van de architectuurbeschrijving zal in een branche _nieuwe architectuur_ worden verwerkt. Deze wordt geforked vanaf, en
teruggebracht naar, de _develop_ branch. Door wijzigingen in een eigenaarbranch op te nemen zijn alle wijzigingen op de documentatie inzichtelijk per wijzigingsvoorstel.

De _develop_ branch wordt dus niet gebruikt om wijzigingen op het document
te maken maar dient als verzamelbranch voor de verschillende wijzigingen
die in een volgende release moeten komen.

## Automatisering en scripts

Github ondersteunt automatisering van taken door scripts. Standaard
is de publicatie via _github pages_. Binnen de Logius standaarden maken
we gebruik van scripts om links te checken en om een paar eenvoudige
tests op digitoegankelijkheidseisen uit te voeren.
