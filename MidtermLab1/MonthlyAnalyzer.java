package MidtermLab1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class MonthlyAnalyzer {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        File file;

        // LOOP until valid file path
        while (true) {
            System.out.print("Enter dataset file path: ");
            String path = input.nextLine();
            file = new File(path);

            if (file.exists() && file.isFile()) {
                break;
            } else {
                System.out.println("Invalid file path. Please try again.\n");
            }
        }

        // TreeMap sorts months automatically (ascending)
        Map<String, Double> monthlyTotals = new TreeMap<>();

        try {
            Scanner fileReader = new Scanner(file);

            // Skip header row
            if (fileReader.hasNextLine()) {
                fileReader.nextLine();
            }

            while (fileReader.hasNextLine()) {

                String line = fileReader.nextLine();
                String[] parts = line.split(",");

                if (parts.length >= 13) {

                    String salesStr = parts[7].trim();      // total_sales
                    String releaseDate = parts[12].trim();  // release_date

                    if (!salesStr.isEmpty() && !releaseDate.isEmpty()) {

                        try {
                            double sales = Double.parseDouble(salesStr);

                            // Process only valid YYYY-MM-DD
                            if (releaseDate.length() >= 7 && releaseDate.contains("-")) {

                                String month = releaseDate.substring(0, 7);

                                monthlyTotals.put(
                                        month,
                                        monthlyTotals.getOrDefault(month, 0.0) + sales
                                );
                            }

                        } catch (NumberFormatException e) {
                            // Skip invalid numeric values safely
                        }
                    }
                }
            }

            fileReader.close();

        } catch (FileNotFoundException e) {
            System.out.println("Error reading file.");
            input.close();
            return;
        }

        System.out.println("\n===== Monthly Sales Summary =====");

        String bestMonth = "";
        double highestSales = 0;

        for (Map.Entry<String, Double> entry : monthlyTotals.entrySet()) {

            String month = entry.getKey();
            double total = entry.getValue();

            System.out.printf("%s : %.2f\n", month, total);

            if (total > highestSales) {
                highestSales = total;
                bestMonth = month;
            }
        }

        System.out.println("\n===== Best Performing Month =====");

        if (!bestMonth.isEmpty()) {
            System.out.printf("%s with total sales of %.2f\n",
                    bestMonth, highestSales);
        } else {
            System.out.println("No valid data found.");
        }

        input.close();
    }
}