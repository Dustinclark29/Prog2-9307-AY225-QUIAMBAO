const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(__dirname));

app.post('/analyze', upload.single('dataset'), (req, res) => {

    const data = fs.readFileSync(req.file.path, 'utf8');
    const lines = data.trim().split('\n');

    let monthlyTotals = {};

    for (let i = 1; i < lines.length; i++) {

        const parts = lines[i].split(',');

        if (parts.length >= 13) {

            const sales = parseFloat(parts[7]);
            const releaseDate = parts[12];

            if (!isNaN(sales) && releaseDate && releaseDate.length >= 7) {

                const month = releaseDate.substring(0, 7);

                if (!monthlyTotals[month]) {
                    monthlyTotals[month] = 0;
                }

                monthlyTotals[month] += sales;
            }
        }
    }

    const sortedMonths = Object.keys(monthlyTotals).sort();

    let output = "===== Monthly Sales Summary =====\n";

    let bestMonth = "";
    let highestSales = 0;

    sortedMonths.forEach(month => {

        const total = monthlyTotals[month];
        output += `${month} : ${total.toFixed(2)}\n`;

        if (total > highestSales) {
            highestSales = total;
            bestMonth = month;
        }
    });

    output += "\n===== Best Performing Month =====\n";
    output += `${bestMonth} with total sales of ${highestSales.toFixed(2)}`;

    res.send(output);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});