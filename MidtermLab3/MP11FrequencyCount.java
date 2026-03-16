import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MP11FrequencyCount {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        Map<String, Integer> frequency = new HashMap<>();

        // Try-with-resources automatically closes the file
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            while ((line = br.readLine()) != null) {

                // Skip empty lines
                if (line.trim().isEmpty()) {
                    continue;
                }

                // Split CSV while keeping quoted commas safe
                String[] data = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");

                // Ensure enough columns exist
                if (data.length > 1) {

                    String role = data[1].trim();

                    // Skip header and invalid rows
                    if (role.equalsIgnoreCase("Student/ Faculty/ NTE")
                            || role.equalsIgnoreCase("Column1")
                            || role.isEmpty()) {
                        continue;
                    }

                    // Count occurrences
                    frequency.put(role, frequency.getOrDefault(role, 0) + 1);
                }
            }

            // Print results
            System.out.println("\nFrequency Count:");
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