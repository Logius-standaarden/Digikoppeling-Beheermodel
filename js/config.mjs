import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Beheermodel",
  previousPublishVersion: "1.7",
  previousPublishDate: "2022-06-01",
  pubDomain: "dk",
  publishDate: "2023-09-23",
  publishVersion: "1.8",
  shortName: "beheer",
  specStatus: "WV",
  specType: "WA",
  
  postProcess: [ generateMermaidFigures ],
});
