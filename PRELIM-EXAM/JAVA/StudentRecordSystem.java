/*
 * Student Record System
 * Name: Dustin Clark Quiambao
 * Student ID: [23-0257-806]
 */
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.io.*;

public class StudentRecordSystem extends JFrame {

    DefaultTableModel model;
    JTable table;
    JTextField txtID, txtName, txtLab1, txtLab2, txtLab3, txtPrelim, txtAttendance;

    public StudentRecordSystem() {

        // WINDOW SETTINGS
        setTitle("Records - Dustin Clark Quiambao [23-0257-806]");
        setSize(900, 500);
        setLocationRelativeTo(null); // center screen
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // TABLE MODEL
        model = new DefaultTableModel();
        model.addColumn("Student ID");
        model.addColumn("First Name");
        model.addColumn("Last Name");
        model.addColumn("Lab 1");
        model.addColumn("Lab 2");
        model.addColumn("Lab 3");
        model.addColumn("Prelim Exam");
        model.addColumn("Attendance");

        table = new JTable(model);
        JScrollPane scrollPane = new JScrollPane(table);

        // INPUT PANEL
        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new GridLayout(2, 7, 10, 10));

        txtID = new JTextField();
        txtName = new JTextField();
        txtLab1 = new JTextField();
        txtLab2 = new JTextField();
        txtLab3 = new JTextField();
        txtPrelim = new JTextField();
        txtAttendance = new JTextField();

        JButton btnAdd = new JButton("Add");
        JButton btnDelete = new JButton("Delete");

        // Labels
        inputPanel.add(new JLabel("Student ID:"));
        inputPanel.add(new JLabel("Name:"));
        inputPanel.add(new JLabel("Lab 1:"));
        inputPanel.add(new JLabel("Lab 2:"));
        inputPanel.add(new JLabel("Lab 3:"));
        inputPanel.add(new JLabel("Prelim Exam:"));
        inputPanel.add(new JLabel("Attendance:"));

        // Textfields + Add button
        inputPanel.add(txtID);
        inputPanel.add(txtName);
        inputPanel.add(txtLab1);
        inputPanel.add(txtLab2);
        inputPanel.add(txtLab3);
        inputPanel.add(txtPrelim);
        inputPanel.add(txtAttendance);
        inputPanel.add(btnAdd);

        // ADD COMPONENTS
        add(scrollPane, BorderLayout.CENTER);
        add(inputPanel, BorderLayout.SOUTH);
        add(btnDelete, BorderLayout.NORTH);

        // LOAD CSV DATA
        loadCSV();

        // ADD BUTTON FUNCTION
        btnAdd.addActionListener(e -> addStudent());

        // DELETE BUTTON FUNCTION
        btnDelete.addActionListener(e -> {
            int row = table.getSelectedRow();
            if (row != -1) {
                model.removeRow(row);
                JOptionPane.showMessageDialog(this, "Student successfully deleted!");
            } else {
                JOptionPane.showMessageDialog(this, "Select a row to delete!");
            }
        });
    }

    // ADD STUDENT WITH VALIDATION AND SUCCESS MESSAGE
    private void addStudent() {
        
        if (txtID.getText().isEmpty() || txtName.getText().isEmpty() || txtLab1.getText().isEmpty() ||
            txtLab2.getText().isEmpty() || txtLab3.getText().isEmpty() || txtPrelim.getText().isEmpty() ||
            txtAttendance.getText().isEmpty()) {

            JOptionPane.showMessageDialog(this, "Please fill in all columns before adding!", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }

        // Add student to table
        model.addRow(new Object[]{
                txtID.getText(),
                txtName.getText(),
                txtLab1.getText(),
                txtLab2.getText(),
                txtLab3.getText(),
                txtPrelim.getText(),
                txtAttendance.getText()
        });

        // Clear input fields
        txtID.setText("");
        txtName.setText("");
        txtLab1.setText("");
        txtLab2.setText("");
        txtLab3.setText("");
        txtPrelim.setText("");
        txtAttendance.setText("");

        // Success message
        JOptionPane.showMessageDialog(this, "Student successfully added!");
    }

    // FILE INPUT 
    private void loadCSV() {
        try {
            BufferedReader br = new BufferedReader(new FileReader("MOCK_DATA.csv"));
            String line;

            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                if (data.length >= 7) { // ensure enough columns
                    model.addRow(new Object[]{
                            data[0], data[1], data[2], data[3], data[4], data[5], data[6]
                    });
                }
            }

            br.close();
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, "CSV File Error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        new StudentRecordSystem().setVisible(true);
    }
}
