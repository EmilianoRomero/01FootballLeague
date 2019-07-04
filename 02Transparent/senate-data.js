//----------------------------------------------------------------------------------------------------------------
//FILE: senate-data.js
//LINKED TO: pro-congress-113-senate.js & to senate-data.html
//----------------------------------------------------------------------------------------------------------------

//------------------------------
// 01. TABLE id = senate-data
//------------------------------
var members = data.results[0].members;

function CreateTableFromJSON() {
    // DEFINING AND LINKING THE TABLE CREATED IN html
    var table = document.getElementById("senate-data");
    // DEFINING THE FUNCTION
    for (var i = 0; i < members.length; i++) {
        //DEFINING AND CREATING THE INITIAL ROW
        var tr = document.createElement("TR");
        //DEFINING, ASIGNING VALUE AND APPENDING TO ITS PARENT (INITIAL ROW) EVERY COLUMN
        // AS A CELL (TD) PART OF THE INITIAL ROW
        var td1 = document.createElement("TD");
        td1.innerHTML = members[i].last_name;
        tr.appendChild(td1);
        var td2 = document.createElement("TD");
        td2.innerHTML = members[i].first_name;
        tr.appendChild(td2);
        var td3 = document.createElement("TD");
        td3.innerHTML = members[i].middle_name;
        tr.appendChild(td3);
        var td4 = document.createElement("TD");
        td4.innerHTML = members[i].party;
        tr.appendChild(td4);
        var td5 = document.createElement("TD");
        td5.innerHTML = members[i].seniority;
        tr.appendChild(td5);
        var td6 = document.createElement("TD");
        td6.innerHTML = members[i].state;
        tr.appendChild(td6);
        var td7 = document.createElement("TD");
        td7.innerHTML = members[i].votes_with_party_pct;
        tr.appendChild(td7);
        //APPENDING THE CREATED TR TO THE PARENT TABLE
        table.appendChild(tr);
        if (members[i].middle_name === null || members[i].middle_name === undefined || members[i].middle_name === "") {
            console.log(members[i].last_name + " " + members[i].first_name);
            console.log(members[i].party);
            console.log(members[i].seniority);
            console.log(members[i].state);
            console.log("%" + members[i].votes_with_party_pct);
        } else {
            console.log(members[i].last_name + " " + members[i].first_name + " " + members[i].middle_name);
            console.log(members[i].party);
            console.log(members[i].seniority);
            console.log(members[i].state);
            console.log("%" + members[i].votes_with_party_pct);
        }
    }
};
CreateTableFromJSON(members);