const scrapeIt = require("scrape-it");

module.exports = {

  getCoastalwatch: function() {
      return(
          scrapeIt("http://www.coastalwatch.com/surf-cams-surf-reports/nsw/maroubra", 
              {
                  site: "title",
                  date: ".surfReport ul h3",
                  report: ".surfReport p.noMarginBottom"
              }
          )
      )
  },

  getSwellnet: function() {
      return(
          scrapeIt("http://www.swellnet.com/reports/australia/new-south-wales/eastern-beaches", 
              {
                  site: "title",
                  date: ".views-field-field-surf-report-date .field-content",
                  report: ".views-field-body"
              }
          )
      )
  },

  getReports: function() {
    return( 
      Promise.all([this.getCoastalwatch(), this.getSwellnet()])
        .then(values => { 
          console.log(values);
          return values;
        })
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
