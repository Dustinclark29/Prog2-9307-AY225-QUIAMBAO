const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter CSV file path: ", (filePath) => {

    const frequency = {};

    try {
        const data = fs.readFileSync(filePath, "utf8");
        const lines = data.split("\n");

        for (let line of lines) {

            if (!line.trim()) continue;

            const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);

            if (cols.length > 1) {

                let role = cols[1].trim();

                if (role === "" || role === "Student/ Faculty/ NTE") {
                    continue;
                }

                frequency[role] = (frequency[role] || 0) + 1;
            }
        }

        console.log("\nFrequency Count:");
        console.log("-----------------------");

        for (let key in frequency) {
            console.log(key + " : " + frequency[key]);
        }

    } catch (error) {
        console.log("Error reading file.");
    }

    rl.close();
});