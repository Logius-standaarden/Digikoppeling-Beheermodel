# Bijlage: versie-nummering Digikoppeling onderdelen
Deze bijlage beschrijft de versienummeringsmethodiek die Logius hanteert
in het beheer van de standaarden. Logius volgt hierbij de
[specificatie van Semantisch Versioneren (SEMVER)](https://semver.org/lang/nl/).

## Versioneringsmethodiek
Per document wordt met `[documentnaam]_vX.Y.Z` de versie aangegeven. Met `vX.Y.Z` wordt gerefereerd aan major (X) en minor (Y) releases en (Z) patches, dit wordt hieronder toegelicht:

## Patch Releases
In een patchrelease worden wijzigingen doorgevoerd die de technische specificatie niet raken. Dit kunnen tekstuele wijzigen zijn of inhoudelijke ndelingen van de documenten. De wijzigen worden vastgelegd in release notes. Een patch releases wordt door de beheerder op eigen initiatief of op aanwijzingen van gebruikers doorgevoerd en gepubliceerd. Een patchrelease wordt aan het Technisch Overleg ter kennisgeving medegedeeld. Een nieuwe patchrelease vervangt een eerdere versie in zijn geheel.

## Minor releases
In een minor release kunnen wijzigingen doorgevoerd worden die de technische specificatie van een koppelvlak raken. Dat kunnen fouten zijn in de specificatie zijn, het verzwaren of verlichten van een restrictie of het een aanpassing van een beveiligingstandaard (zoals TLS 1.0 naar TLS 1.2). In de SEMVER aanpak zijn minor releases backwards compatible. Voor de uitwisselingsstandaarden zoals Digikoppeling is backwards compatibility lastiger te bepalen omdat uiteindelijk twee partijen met elkaar moeten meebewegen. *Minor Releases kunnen dus mogelijk backwards incompatible zijn*. Voor Minor Releases wordt een uitgebreid vaststellings-procedure gevolgd (conform het Digikoppeling Beheermodel) en er kan in overleg met de deelnemers van het TO tot een migratiepad worden besloten. Dit migratiepad wordt in de release meegenomen.

## Major Releases
Er zijn twee Major release momenten: de overgang naar nieuwe internationale standaarden binnen een bestaand profiel, bijvoorbeeld HTTP 2.0 of SOAP 1.2 binnen Digikoppeling WUS of de toevoeging van een geheel nieuw profiel, zoals de Digikoppeling Grote Berichten Push variant of ebMS3. In het eerste geval komt er een nieuw major versie van Digikoppeling WUS Specificatie document vast te stellen volgens het de uitgebreid vaststellingsprocedure (conform het Digikoppeling Beheer-model). In het tweede geval wordt er een *geheel nieuw* document toegevoegd aan de standaard. Als hierbij het functionele toepassingsgebied van de standaard, waarvoor het pas toe of leg uit regime geldt, veranderd, dan wordt eerst de uitgebreide vaststellingsprocedure gevolgd en vervolgens de procedure van het Forum Standaardisatie.

## Versie overgangen
Wanneer een nieuwe versie uitkomt zal de oude versie conform de afgestemde overgangsperiode een einddatum van geldigheid krijgen. in de overgangsperiode kunnen dus 2 documenten de status geldig hebben.
