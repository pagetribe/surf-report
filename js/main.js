const scrapeIt = require("scrape-it");

module.exports = {
  getCoastalWatchReport: function() {
    scrapeIt("http://www.coastalwatch.com/surf-cams-surf-reports/nsw/maroubra",
        {
          site: "title",
          date: ".surfReport ul h3",
          report: ".surfReport p.noMarginBottom"
        }
        ).then(page => {
          console.log('in then')
          // document.write(page)
          console.log(page);
        }
    )
  }
}

// scrapeIt("http://www.swellnet.com/reports/australia/new-south-wales/eastern-beaches",
//         {
//                   site: "title",
//                           date: ".views-field-field-surf-report-date .field-content",
//                                   report: ".views-field-body"
//                                         }
//     ).then(page => {
//       console.log(page);
// });
