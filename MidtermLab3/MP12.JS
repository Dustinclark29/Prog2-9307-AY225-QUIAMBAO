const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter CSV file path: ", function(filePath) {

    const frequency = {
        PASS: 0,
        FAIL: 0
    };

    try {

        const data = fs.readFileSync(filePath, "utf8");
        const lines = data.split("\n");

        for (let line of lines) {

            if (!line.trim()) continue;

            // Safe CSV split (handles quoted commas)
            const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);

            if (cols.length > 7) {

                let result = cols[7].trim();

                if (result === "PASS" || result === "FAIL") {
                    frequency[result]++;
                }
            }
        }

        console.log("\nPASS / FAIL Frequency:");
        console.log("-----------------------");
        console.log("PASS : " + frequency.PASS);
        console.log("FAIL : " + frequency.FAIL);

    } catch (error) {
        console.log("Error reading file.");
    }

    rl.close();
});