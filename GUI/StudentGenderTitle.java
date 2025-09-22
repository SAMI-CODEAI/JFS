import java.awt.*;
import java.awt.event.ActionListener;
import javax.swing.*;
import java.awt.event.*;

public class StudentGenderTitle {
    public static void main(String[] args) 
    {
        //frame setup
        JFrame frame=new JFrame("Student Gender and Title");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400,400);
        frame.setLayout(new GridLayout(5, 2, 5, 5));
        //labels and textfields
        JLabel rollLabel=new JLabel("Roll No:");
        JTextField rollField=new JTextField();

        JLabel nameLabel=new JLabel("Name:");
        JTextField nameField=new JTextField();

        JLabel genderLabel=new JLabel("Gender(M/F):");
        JTextField genderField=new JTextField();

        JButton submitButton=new JButton("Show Title:");
        JLabel resultLable=new JLabel("",SwingConstants.CENTER);
        //adding components to frame
        frame.add(rollLabel);
        frame.add(rollField);

        frame.add(nameLabel);
        frame.add(nameField);

        frame.add(genderLabel);
        frame.add(genderField);

        frame.add(new JLabel());//placeholder
        frame.add(submitButton);

        frame.add(new JLabel("Result:"));
        frame.add(resultLable);

        //button logic Event Registration
        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name=nameField.getText().trim();
                String gender =genderField.getText().trim().toUpperCase();
                if (name.isEmpty()||gender.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Please fill all fields.", "Input Error", JOptionPane.ERROR_MESSAGE);
                    return;
                }
                if (gender.equals("M")) {
                    resultLable.setText("Mr. " + name);}
                else if(gender.equals("F")){
                    resultLable.setText("Ms. " + name);}
                else{
                    JOptionPane.showMessageDialog(frame, "Enter Gender as M or F only.", "Input Error", JOptionPane.ERROR_MESSAGE);
                }
            }
    });
    //show frame
    frame.setVisible(true);
    }
}


