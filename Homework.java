package scannerExamples;

import java.util.Scanner;

public class Homework {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int r = 638;

        System.out.println(r);
        System.out.println(Integer.toOctalString(r));
        System.out.println(Integer.toBinaryString(r));
        System.out.println(Integer.toHexString(r));



        sc.close();
    }
}
