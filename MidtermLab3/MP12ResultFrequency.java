import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MP12ResultFrequency {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        Map<String, Integer> frequency = new HashMap<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            while ((line = br.readLine()) != null) {

                if (line.trim().isEmpty()) continue;

                String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");

                if (data.length > 7) {

                    String result = data[7].trim(); // PASS or FAIL

                    if (!result.equalsIgnoreCase("Result") && !result.isEmpty()) {

                        frequency.put(result, frequency.getOrDefault(result, 0) + 1);
                    }
                }
            }

            System.out.println("\nPASS / FAIL Frequency:");
            System.out.println("-----------------------");

            for (Map.Entry<String, Integer> entry : frequency.entrySet()) {
                System.out.println(entry.getKey() + " : " + entry.getValue());
            }

        } catch (IOException e) {
            System.out.println("Error reading the CSV file.");
        }

        scanner.close();
    }
}