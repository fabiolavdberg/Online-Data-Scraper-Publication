const Crawler = require("crawler");
const fs = require('fs');
// var port = 8887;


const BESTAND = "sample.js"
const pages = [
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31373',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31374',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31375',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31376',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31378',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31383',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31385',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31386',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31389',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31391',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31392',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31393',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31397',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31398',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31399',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31400',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31401',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31402',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31405',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31407',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31409',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31410',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31411',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31412',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31413',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31414',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31415',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31416',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31417',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31418',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31419',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31420',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31423',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31424',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31425',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31426',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31427',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31428',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31429',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31430',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31431',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31432',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31433',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31434',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31435',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31436',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31437',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31438',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31439',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31440',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31441',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31442',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31443',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31444',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31445',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31446',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31447',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31448',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31449',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31450',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31451',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31452',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31453',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31454',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31455',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31456',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31457',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31458',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31459',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31460',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31461',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31462',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31463',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31464',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31465',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31466',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31467',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31468',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31469',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31470',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31471',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31472',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31473',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31474',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31475',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31476',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31477',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31478',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31479',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31480',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31481',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31482',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31483',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31484',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31485',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31486',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31487',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31488',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31489',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31490',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31491',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31492',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31493',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31494',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31495',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31496',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31497',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31498',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31499',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31500',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31501',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31502',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31503',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31505',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31506',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31507',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31508',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31509',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31510',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31511',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31512',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31513',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31514',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31515',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31516',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31517',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31518',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31519',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31520',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31521',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31522',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31523',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31524',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31525',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31526',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31527',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31528',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31529',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31530',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31531',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31532',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31533',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31534',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31535',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31536',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31537',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31538',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31539',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31541',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31542',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31543',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31544',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31545',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31546',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31547',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31548',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31549',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31550',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31551',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31552',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31553',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31554',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31555',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31556',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31557',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31558',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31559',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31560',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31561',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31562',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31563',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31564',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31565',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31566',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31567',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31568',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31569',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31570',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31571',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31572',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31573',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31574',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31575',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31576',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31577',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31578',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31579',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31580',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31581',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31582',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31583',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31584',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31585',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31586',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31587',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31588',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31589',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31590',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31591',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31592',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31593',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31594',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31595',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31595',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31597',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31598',
  'http://transcripts.foreverdreaming.org/viewtopic.php?f=845&t=31599',




]

const hits = {
    MONICA: [],
    JOEY: [],
    CHANDLER: [],
    ROSS: [],
    RACHEL: [],
    PHOEBE: [],
    JANICE: [],
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
                const positives = Object.keys(hits).filter(name => new RegExp(`${name}:`, 'i').test(line))

                const modified = line.replace(/.+?(?=:): /, '');
                positives.forEach(key => {
                    hits[key].push(modified);
                })
            });


            fs.writeFile(BESTAND, '' , function() {})
            fs.writeFile(BESTAND, "var friends_data = " + JSON.stringify(hits, null, 4), function() {});
        }
        done();
    }
});

pages.forEach(page => c.queue(page));
