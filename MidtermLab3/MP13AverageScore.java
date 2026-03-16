import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class MP13AverageScore {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        int totalScore = 0;
        int count = 0;

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            while ((line = br.readLine()) != null) {

                if (line.trim().isEmpty()) continue;

                String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");

                if (data.length > 6) {

                    try {
                        int score = Integer.parseInt(data[6].trim());
                        totalScore += score;
                        count++;
                    } catch (NumberFormatException e) {
                        // skip header or invalid rows
                    }
                }
            }

            if (count > 0) {
                double average = (double) totalScore / count;

                System.out.println("\nAverage Score:");
                System.out.println("-----------------------");
                System.out.println("Total Records : " + count);
                System.out.printf("Average Score : %.2f\n", average);
            }

        } catch (IOException e) {
            System.out.println("Error reading file.");
        }

        scanner.close();
    }
}