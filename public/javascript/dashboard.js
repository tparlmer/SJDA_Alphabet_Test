var table = document.getElementById("quiztable");
var dashboardtable = document.getElementById("dashboardtable");

const resDashboardConElement = document.getElementById(
  "resDashboard-container"
);

// Saved quiz search
nameSearchBtn.addEventListener("click", searchByName);

// Get saved quiz from database
function searchByName() {
  var firstname = document.getElementById("firstnameSearchinput").value;
  var lastname = document.getElementById("lastnameSearchinput").value;
  var queryParam = "";

  console.log("firstname", firstname);
  console.log("lastname", lastname);

  if (firstname) {
    queryParam = "?firstname=" + firstname;
  }
  if (lastname) {
      queryParam = "?lastname=" + lastname;
  }
  if(firstname && lastname) {
    queryParam = "?firstname=" + firstname + "&lastname=" + lastname;
  }

  console.log("queryParam", queryParam);

  fetch(`/api/users${queryParam}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.log("Error: ",response.statusText);
      alert("An error occured fetching the data. Please try again later.");
    })
    .then((data) => {
      console.log("data", data);
      var rowCount = table.rows.length;

      // Delete already filled rows
      for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
      }
      if(data) {
        if(data.length == 0) {
          var row = table.insertRow(table.rows.length);
          row.innerHTML = "No records found";
        }
      }
      for (i = 0; i < data.length; i++) {
        for (x = 0; x < data[i].quizzes.length; x++) {
          var createdDate = new Date(data[i].quizzes[x].createdAt).toLocaleString();
          var dateStr = new Date(data[i].quizzes[x].createdAt).toISOString();
          var quizObj = data[i].quizzes[x];

          var row = table.insertRow(table.rows.length);

          // Cell 4
          var cell4 = row.insertCell(0);
          var rsltLink = document.createElement("button");
          rsltLink.name = "rsltBtn"
          rsltLink.type = "button";
          rsltLink.class = "btn btn-primary";
          rsltLink.innerHTML = "View Results";
          rsltLink.setAttribute("data-toggle","modal");
          rsltLink.setAttribute("data-target","myModal");
          rsltLink.id = data[i].firstname+data[i].lastname+dateStr;
          cell4.appendChild(rsltLink);
          rsltLink.addEventListener("click",function(){
            OpenBootstrapPopup(data,this.id);
          }); 

          // Cell 3
          var cell3 = row.insertCell(0);
          cell3.innerHTML = createdDate;

          // Cell 2
          var cell2 = row.insertCell(0);
          cell2.innerHTML = data[i].lastname;

          // Cell 1
          var cell1 = row.insertCell(0);
          cell1.innerHTML = data[i].firstname;
        }
      }
    });
  }

  function OpenBootstrapPopup(dataObj,btnId) {

    $("#myModal").modal('show');
      var dshRowCount = dashboardtable.rows.length;
      

      const quesString = ["questionA","questionB","questionC","questionD","questionE",
                          "questionF","questionG","questionH","questionI","questionJ",
                          "questionK","questionL","questionM","questionN","questionO",
                          "questionP","questionQ","questionR","questionS","questionT",
                          "questionU","questionV","questionW","questionX","questionY",
                          "questionZ"];
       
      for (var i = dshRowCount - 1; i > 0; i--) {
        dashboardtable.deleteRow(i);
      }

     for (i = 0; i < dataObj.length; i++) {
      for (x = 0; x < dataObj[i].quizzes.length; x++) {

        var dateStr = new Date(dataObj[i].quizzes[x].createdAt).toISOString();

        if(dataObj[i].firstname+dataObj[i].lastname+dateStr === btnId) {

          for(var q = 0;q< quesString.length; q++) {
            var dsRow = dashboardtable.insertRow(dashboardtable.rows.length);
            var quesStr = quesString[q];
            
            // Cell 2
            var cell2 = dsRow.insertCell(0);
            cell2.innerHTML = dataObj[i].quizzes[x][quesStr];
    
            // Cell 1
            var cell1 = dsRow.insertCell(0);
            cell1.innerHTML = quesStr;
          }

        }
      }
     }
           
  }


