import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Calculator {
    JFrame frame;
    JLabel input1, input2, resultLabel;
    JTextField text1, text2, textResult;
    JButton add, sub, mul, div;

    Calculator() {
        // Frame setup
        frame = new JFrame("Calculator");
        frame.setLayout(new GridLayout(6, 2));
        frame.setSize(300, 200);
        frame.setLocation(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Components
        input1 = new JLabel("Input 1:");
        input2 = new JLabel("Input 2:");
        resultLabel = new JLabel("Result:");
        text1 = new JTextField(10);
        text2 = new JTextField(10);
        textResult = new JTextField(10);
        textResult.setBackground(Color.WHITE);
        textResult.setForeground(Color.RED);
        textResult.setEditable(false); // Result field should not be editable

        add = new JButton("Add");
        sub = new JButton("Subtract");
        mul = new JButton("Multiply");
        div = new JButton("Divide");

        // Add components to frame
        frame.add(input1); frame.add(text1);
        frame.add(input2); frame.add(text2);
        frame.add(resultLabel); frame.add(textResult);
        frame.add(add); frame.add(sub);
        frame.add(mul); frame.add(div);

        // Add action listeners using lambda expressions
        add.addActionListener(e -> onCalcOp(e));
        sub.addActionListener(e -> onCalcOp(e));
        mul.addActionListener(e -> onCalcOp(e));
        div.addActionListener(e -> onCalcOp(e));

        frame.setVisible(true);
    }

    public void onCalcOp(ActionEvent e) {
        try {
            double num1 = Double.parseDouble(text1.getText());
            double num2 = Double.parseDouble(text2.getText());
            double output = 0;

            Object source = e.getSource();//tells if u came from add, sub, mul or div button
            if (source == add)
                output = num1 + num2;
            else if (source == sub)
                output = num1 - num2;
            else if (source == mul)
                output = num1 * num2;
            else if (source == div) {
                if (num2 != 0)
                    output = num1 / num2;
                else {
                    textResult.setText("Cannot divide by zero");
                    return;
                }
            }

            textResult.setText(String.valueOf(output));
        } catch (Exception ex) {
            textResult.setText("Error");
        }
    }

    public static void main(String[] args) {
        new Calculator();
    }
}