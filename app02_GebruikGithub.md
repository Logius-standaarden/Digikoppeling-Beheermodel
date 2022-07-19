# Gebruik Github in het beheerd

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

Binnen et standaardenbeheer bij Logius maken we gebruik van verschillende
branches. De _main_ branch bevat de laatste formeel geaccepteerde versie
van een document. De _develop_ branch bevat een werkversie met daarin alle
wijzigingen die in een volgende geaccepteerde versie opgenomen moeten
worden.

Aanpassingen in de documentatie die voor een specifiek wijzingsvoorstel
gemaakt worden worden in eigen branch verwerkt. Deze branch wordt geforked vanaf de _develop_ branch en wordt nadat het wijzigingsverzoek aangenomen
is teruggebracht naar de _develop_ branch. Voorbeeld: een wijzigingsverzoek
voor het aanpassen van de architectuurbeschrijving zal in een branche _nieuwe architectuur_ worden verwerkt. Deze wordt geforked vanaf, en
teruggebracht naar, de _develop_ branch.

## Automatisering en scripts

Github ondersteunt automatisering van taken door scripts. Standaard is de publicatie via _github pages_. Binnen de Logius stan
