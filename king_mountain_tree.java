import java.util.List; 
import java.util.concurrent.TimeUnit; 
 
public class ProBonoProject { 
 
    //variables to store user info 
    static String username; 
    static String password; 
    
    //arraylist to store user accounts 
    static List<UserAccount> userAccounts; 
 
    public static void main(String[] args) { 
 
        //user-input handles 
        username = args[0]; 
        password = args[1]; 
 
        //verify user credentials 
        if (valid(username, password)) { 
            System.out.println("User credentials accepted!"); 
        } else { 
            System.out.println("Invalid username or password"); 
            System.exit(0); 
        } 
 
        // create a user account in the userAccounts list 
        UserAccount user = new UserAccount(username, password); 
        userAccounts.add(user); 
 
        //give user a welcome message 
        System.out.println("Welcome to Pro Bono Project, " + username + "!"); 
 
        //start main project loop 
        while (true) { 
 
            //display options 
            System.out.println("Please select an option:"); 
            System.out.println("1. View project list \n2. View volunteer statistics\n3. Logout"); 
 
            //parse user input 
            int choice = Integer.parseInt(System.console().readLine()); 
 
            switch (choice) { 
                case 1: 
                    printProjectList(); 
                    break; 
                case 2: 
                    printVolunteerStats(); 
                    break; 
                case 3: 
                    System.out.println("Goodbye!"); 
                    System.exit(0); 
                    break; 
                default: 
                    System.out.println("Please enter a valid option"); 
            } 
        } 
    } 
 
    private static boolean valid(String username, String password) { 
        //check if username and password match credentials 
        for (UserAccount user : userAccounts) { 
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) { 
                return true; 
            } 
        } 
        return false; 
    } 
 
    private static void printProjectList() { 
        //uses a loop to retrieve and print list of projects from DB 
        System.out.println("Here is a list of all the Pro Bono Projects:"); 
        for (Project project : DB.getProjects()) { 
            System.out.println(project); 
        } 
    } 
 
    private static void printVolunteerStats() { 
        //use a loop to retrieve and print number of hours volunteered by each user 
        System.out.println("Here are the volunteer statistics:"); 
        for (UserAccount user : userAccounts) { 
            System.out.println(user.getUsername() + " : " + TimeUnit.MILLISECONDS.toHours(user.getTimeLogged()) + " hours"); 
        } 
    }

}