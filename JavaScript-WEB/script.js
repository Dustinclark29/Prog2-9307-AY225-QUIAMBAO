/*
 * Student Record System
 * Name: Dustin Clark Quiambao
 * Student ID: [23-0257-806]
 */

//(mock data)
const csvData = `
073900438,Osbourne,Wakenshaw,69,5,52,12,78
114924014,Albie,Gierardi,58,92,16,57,97
111901632,Eleen,Pentony,43,81,34,36,16
084000084,Arie,Okenden,31,5,14,39,99
272471551,Alica,Muckley,49,66,97,3,95
104900721,Jo,Burleton,98,94,33,13,29
111924392,Cam,Akram,44,84,17,16,24
292970744,Celine,Brosoli,3,15,71,83,45
107004352,Alan,Belfit,31,51,36,70,48
071108313,Jeanette,Gilvear,4,78,15,69,69
042204932,Ethelin,MacCathay,48,36,23,1,11
111914218,Kakalina,Finnick,69,5,65,10,8
074906059,Mayer,Lorenzetti,36,30,100,41,92
091000080,Selia,Rosenstengel,15,42,85,68,28
055002480,Dalia,Tadd,84,86,13,91,22
063101111,Darryl,Doogood,36,3,78,13,100
071908827,Brier,Wace,69,92,23,75,40
322285668,Bucky,Udall,97,63,19,46,28
103006406,Haslett,Beaford,41,32,85,60,61
104913048,Shelley,Spring,84,73,63,59,3
051403517,Marius,Southway,28,75,29,88,92
021301869,Katharina,Storch,6,61,6,49,56
063115178,Hester,Menendez,70,46,73,40,56
084202442,Shaylynn,Scorthorne,50,80,81,96,83
275079882,Madonna,Willatt,23,12,17,83,5
071001041,Bancroft,Padfield,50,100,58,13,14
261170740,Rici,Everard,51,15,48,99,41
113105478,Lishe,Dashkovich,9,23,48,63,95
267089712,Alexandrina,Abate,34,54,79,44,71
041002203,Jordon,Ribbens,41,42,24,60,21
021308176,Jennette,Andrassy,63,13,100,67,4
122239937,Hamid,Chapell,90,92,44,43,47
021109935,Cordy,Crosetto,16,10,99,32,57
111026041,Tiphanie,Gwin,34,45,88,87,27
072408708,Leanor,Izachik,95,35,88,9,75
221370030,Lissy,Tuffley,90,30,84,60,86
104900048,Myrta,Mathieson,88,80,16,6,48
111311413,Cynthea,Fowles,82,59,13,97,23
091408695,Zacherie,Branch,67,6,8,78,10
231372183,Britney,Blackesland,78,79,36,23,83
263190634,Theda,Menco,50,13,7,11,8
021606580,Carin,Schrader,77,32,25,56,53
074902341,Shawn,Moston,64,91,6,95,21
107006088,Virge,Sinnat,20,1,78,44,92
`;

// Parse CSV into array of objects
let students = csvData.trim().split("\n").map(line => {
    let [id, name, lab1, lab2, lab3, prelim, attendance] = line.split(",");
    return { id, name, lab1, lab2, lab3, prelim, attendance };
});

// Render function
function render() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    students.forEach((s, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.lab1}</td>
                <td>${s.lab2}</td>
                <td>${s.lab3}</td>
                <td>${s.prelim}</td>
                <td>${s.attendance}</td>
                <td><button onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
    });
}

// Create
function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let lab1 = document.getElementById("lab1").value;
    let lab2 = document.getElementById("lab2").value;
    let lab3 = document.getElementById("lab3").value;
    let prelim = document.getElementById("prelim").value;
    let attendance = document.getElementById("attendance").value;

    if (!id || !name) {
        alert("Please enter at least ID and Name!");
        return;
    }

    students.push({ id, name, lab1, lab2, lab3, prelim, attendance });
    render();

    // Clear input fields
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("lab1").value = "";
    document.getElementById("lab2").value = "";
    document.getElementById("lab3").value = "";
    document.getElementById("prelim").value = "";
    document.getElementById("attendance").value = "";

    // Show success message
    showMessage("Student successfully added!");
}

// Delete
function deleteStudent(index) {
    students.splice(index, 1);
    render();
}

// Temporary message function
function showMessage(message) {
    const msgDiv = document.createElement("div");
    msgDiv.innerText = message;
    msgDiv.style.position = "fixed";
    msgDiv.style.top = "20px";
    msgDiv.style.right = "20px";
    msgDiv.style.backgroundColor = "#000";
    msgDiv.style.color = "#fff";
    msgDiv.style.padding = "10px 20px";
    msgDiv.style.borderRadius = "5px";
    msgDiv.style.fontWeight = "600";
    msgDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    msgDiv.style.zIndex = "1000";

    document.body.appendChild(msgDiv);

    // Remove 
    setTimeout(() => {
        msgDiv.remove();
    }, 2000);
}

// Load data on startup
render();