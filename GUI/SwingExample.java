import java.awt.*;
import javax.swing.*;
public class SwingExample
{
    JFrame frame;
    JLabel label;
    JTextField textField;
    JButton show_button; 
    JButton palindrome_button; 
    JButton reverse_button; 
    JPanel panel;

    SwingExample() 
    {
        frame =new JFrame("Swing Example");
        label = new JLabel("Enter your name:");
        textField = new JTextField(20);
        show_button = new JButton("show name");
        palindrome_button = new JButton("palindrome");
        reverse_button = new JButton("reverse string");
        panel = new JPanel();
        panel.add(label);
        panel.add(label);
        panel.add(textField);
        panel.add(show_button);
        panel.add(palindrome_button);
        panel.add(reverse_button);
        frame.add(panel);
        frame.setSize(300,150);
        frame.setLocation(0,500);
        panel.setBackground(Color.GRAY);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        show_button.addActionListener(e -> showName());
        palindrome_button.addActionListener(e -> palindrome());
        reverse_button.addActionListener(e -> reverseString());
    }
    void showName()
    {
        String name=textField.getText();
        JOptionPane.showMessageDialog(null, "My name is " + name,name,JOptionPane.INFORMATION_MESSAGE);
    }
    void palindrome()
    {
        String name=textField.getText();
        int j=name.length()-1;
       String msg="";
        for (int i=0;i<j;i++,j--)
        {
            if(name.charAt(i)!=name.charAt(j))
            {
                msg="Not a palindrome";
                break;
            }
        }
        JOptionPane.showMessageDialog(null, "My name is " + msg,name,JOptionPane.INFORMATION_MESSAGE);
    }
    void reverseString()
    {
        String name=textField.getText();
        int j=name.length()-1;
        String revString="";
        for(int i=j;i>=0;i--)
        {
            revString+=name.charAt(i);
        }
        JOptionPane.showMessageDialog(null, "the reverse of my name is " + revString,"reverse",JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) 
    {
        new SwingExample();

    }
    
}