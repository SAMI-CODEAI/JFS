import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class SimpleIntrestCalculator {
    public static void main(String[] args) {
        // Create the main frame
        JFrame frame = new JFrame("Simple Interest Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new GridLayout(6, 2, 10, 10)); // 6 rows, 2 columns

        // Input fields and labels
        JLabel principalLabel = new JLabel("Principal Amount:");
        JTextField principalField = new JTextField("0.0");

        JLabel timeLabel = new JLabel("Time (years):");
        JTextField timeField = new JTextField("0.0");

        JLabel rateLabel = new JLabel("Rate of Interest (%):");
        JTextField rateField = new JTextField("0.0");

        // Result field
        JLabel resultTextLabel = new JLabel("Simple Interest:");
        JTextField resultField = new JTextField("0.0");
        resultField.setEditable(false);

        // Calculate button
        JButton calculateButton = new JButton("Calculate SI");

        // Add components to frame
        frame.add(principalLabel);
        frame.add(principalField);

        frame.add(timeLabel);
        frame.add(timeField);

        frame.add(rateLabel);
        frame.add(rateField);

        frame.add(new JLabel()); // empty cell
        frame.add(calculateButton);

        frame.add(resultTextLabel);
        frame.add(resultField);

        frame.add(new JLabel()); // filler
        frame.add(new JLabel()); // filler

        // Action listener for calculation
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double principal = Double.parseDouble(principalField.getText());
                    double time = Double.parseDouble(timeField.getText());
                    double rate = Double.parseDouble(rateField.getText());

                    if (principal <= 0 || time <=0 || rate <=0) {
                        throw new NumberFormatException();
                    }

                    double simpleInterest = (principal * time * rate) / 100;
                    resultField.setText(String.format("%.2f", simpleInterest));
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame,
                        "Please enter valid positive numbers.",
                        "Error Message",
                        JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        // Make frame visible
        frame.setVisible(true);
    }
}