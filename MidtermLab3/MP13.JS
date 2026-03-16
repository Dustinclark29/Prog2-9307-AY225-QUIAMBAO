const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter CSV file path: ", function(filePath) {

    let totalScore = 0;
    let count = 0;

    try {

        const data = fs.readFileSync(filePath, "utf8");
        const lines = data.split("\n");

        for (let line of lines) {

            if (!line.trim()) continue;

            // Safe CSV split (handles quoted commas)
            const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);

            if (cols.length > 6) {

                const score = parseInt(cols[6].trim());

                if (!isNaN(score)) {
                    totalScore += score;
                    count++;
                }
            }
        }

        if (count > 0) {

            const average = totalScore / count;

            console.log("\nAverage Score:");
            console.log("-----------------------");
            console.log("Total Records : " + count);
            console.log("Average Score : " + average.toFixed(2));
        }

    } catch (error) {
        console.log("Error reading file.");
    }

    rl.close();
});