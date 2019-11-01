const Crawler = require("crawler");
const fs = require('fs');
// var port = 8887;


const BESTAND = "sample.js"
const pages = [
    'https://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31373',
    'https://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31374',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31375',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31376',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31377',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31378',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31379',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31380',
    'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31385',

]

const hits = {
    MONICA: [],
    JOEY: [],
    CHANDLER: [],
    ROSS: [],
    RACHEL: [],
    PHOEBE: [],
    monica: [],
    joey:[],
    chandler:[],
    ross: [],
    rachel: [],
    phoebe: [],
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
            fs.writeFile(BESTAND, "var friends_data = " + JSON.stringify(hits, null, 4), function() {});
        }
        done();
    }
});

pages.forEach(page => c.queue(page));
