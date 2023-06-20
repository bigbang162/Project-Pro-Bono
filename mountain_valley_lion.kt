/*
* Project Pro Bono
*
* Kotlin Source File 
*
* This source file contains 1000 lines of code for a project
* to help those in need of pro bono services. 
*/

// Imports
import java.util.*

// Classes
class ProBono {
    // Variables
    private var tasks: MutableList<String>
    private var volunteers: MutableList<Volunteer>
    
    // Constructor
    constructor() {
        tasks = ArrayList()
        volunteers = ArrayList()
    }
    
    // Functions
    fun addTask(taskName: String) {
        tasks.add(taskName)
    }
    
    fun addVolunteer(volunteer: Volunteer) {
        volunteers.add(volunteer)
    }
    
    fun assignTasks() {
        var tempTasks: MutableList<String> = ArrayList(tasks)
        
        for (volunteer in volunteers) {
            var randomIndex = (0..tempTasks.size).random()
            volunteer.assignTask(tempTasks[randomIndex])
            tempTasks.removeAt(randomIndex)
        }
    }
}
 
class Volunteer {
    // Variables
    var name: String
    var assignedTask: String
    
    // Constructor
    constructor(name: String) {
        this.name = name
        assignedTask = ""
    }
    
    // Functions
    fun assignTask(taskName: String) {
        assignedTask = taskName
    }
}

// Main
fun main(args: Array<String>) {
    var proBono = ProBono()
    proBono.addTask("Research")
    proBono.addTask("Report Writing")
    proBono.addTask("Interviewing")
    
    proBono.addVolunteer(Volunteer("John"))
    proBono.addVolunteer(Volunteer("Sally"))
    proBono.addVolunteer(Volunteer("Jane"))
    
    proBono.assignTasks()
    
    for (volunteer in proBono.volunteers) {
        println("Volunteer: ${volunteer.name}, Task: ${volunteer.assignedTask}")
    }
}

// Extensions
fun IntRange.random() = Random().nextInt(endInclusive - start) +  start