const Crawler = require("crawler");
const fs = require('fs');

const BESTAND = "sample.txt"
const pages = [
    'https://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31373',
    'https://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31374',
]

const hits = {
    "MONICA": [],
    "JOEY": [],
    "CHANDLER": [],
    "ROSS": [],
    "RACHEL": [],
    "PHOEBE": [],
};

const c = new Crawler({
    maxConnections : 10,
    // Voor elke website wordt deze functie uitgevoerd
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;

            $(".postbody").children('p').each(function () {
                const line = $(this).text()
                const positives = Object.keys(hits).filter(name => new RegExp(`${name}`).test(line))

                positives.forEach(key => {
                    hits[key].push(line);
                })
            });



            fs.writeFile(BESTAND, '' , function() {})
            fs.writeFile(BESTAND, JSON.stringify(hits, null, 4), function() {});
        }
        done();
    }
});

pages.forEach(page => c.queue(page));
