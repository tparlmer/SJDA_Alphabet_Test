const resDashboardConElement = document.getElementById(
    "resDashboard-container"
  );
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
    if (!firstname) {
      window.alert("Please enter first name");
    } else {
      queryParam = "?firstname=" + firstname + "&lastname=" + lastname;
    }
  }

  if (!firstname && !lastname) {
    queryParam = "";
  }
  console.log("queryParam", queryParam);

  fetch(`/api/users${queryParam}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Error: " + response.statusText);
    })
    .then((data) => {
      console.log("data", data);
      var rowCount = table.rows.length;

      // Delete already filled rows
      for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
      }

      for (i = 0; i < data.length; i++) {
        console.log("data[i]", data[i].firstname);

        for (x = 0; x < data[i].quizzes.length; x++) {
          var createdDate = new Date(
            data[i].quizzes[x].createdAt
          ).toLocaleDateString();
          var row = table.insertRow(table.rows.length);

          // Cell 4
          var cell4 = row.insertCell(0);
          var rsltLink = document.createElement("button");
          rsltLink.name = "rslBtn";
          rsltLink.type = "button";
          rsltLink.class = "btn btn-primary";
          rsltLink.innerHTML = "View Results";
          rsltLink.id = "rsltBtn";
          cell4.appendChild(rsltLink);
          rsltLink.addEventListener("click", {});

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
  /* .then(data => {
      console.log('datafromuser',data);
      if(data != null && data.length > 0) {
        stFirstName = data[0].firstname;
        stLastName = data[0].lastname;
        fetch(`/api/quiz/${data[0].id}`,{
          method: "GET"
        })  
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          alert("Error: " + response.statusText);
        })
        .then(data => {
          console.log('data',data);
          for(i=0;i<data.length;i++) {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
      
           // Cell 1
            var cell1 = row.insertCell(0);
            cell1.innerHTML = data[i].id;
      
            // Cell 2
            var cell2 = row.insertCell(0);
            cell2.innerHTML = stFirstName;
      
            // Cell 3
            var cell3 = row.insertCell(0);
            cell3.innerHTML = stLastName;
      
            // Cell 4
            var cell4 = row.insertCell(0);
            cell4.innerHTML = data[i].created_at;
          }
        });
      } else{
        console.log('No matching user records found');
      }
     
    }) */
}

// Saved quiz search
nameSearchBtn.addEventListener("click", searchByName);
