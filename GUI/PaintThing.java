import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class PaintThing extends JPanel {
    private int lastX, lastY;
    public PaintThing() {
        setBackground(Color.WHITE);
        addMouseListener(new MouseAdapter() {
            public void mousePressed(MouseEvent e) {
                lastX = e.getX();
                lastY = e.getY();
            }
        });

        addMouseMotionListener(new MouseMotionAdapter() {
            public void mouseDragged(MouseEvent e) {
                Graphics g = getGraphics();
                g.drawLine(lastX, lastY, e.getX(), e.getY());
                lastX = e.getX();
                lastY = e.getY();
            }
        });
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Paint Dialog");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 400);
        frame.add(new PaintThing());
        frame.setVisible(true);
    }
}