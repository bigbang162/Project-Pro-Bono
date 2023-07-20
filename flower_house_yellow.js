//Project Pro Bono

// Initialize function 
function projectProBono() {
	 
	// Setting global variables
	var totalNumberOfProjects = 0;
	var currentNumberOfProjects = 0;
	var projectList = [];
	 
	// Add project to list
	this.addProject = function(project) {
		projectList.push(project);
		totalNumberOfProjects++;
		currentNumberOfProjects++;
	}
	 
	// Remove project 
	this.removeProject = function(title) {
		for(var i = 0; i < projectList.length; i++) {
			if(projectList[i].title == title) {
				projectList.splice(i, 1);
				currentNumberOfProjects--;
			}
		}
	}
	 
	// Get list of projects 
	this.listProjects = function() {
		for (var i = 0; i < projectList.length; i++) {
			var project = projectList[i];
			console.log("Project Title: " + project.title);
			console.log("Project Description: " + project.description);
			console.log("Project Deadline: " + project.deadline);
			console.log("Project Status: " + project.status + "\n");
		}
	}
	 
	// Get current number of projects 
	this.getNumberOfProjects = function() {
		return currentNumberOfProjects;
	}
	 
	// Set project status 
	this.setProjectStatus = function(title, status) {
		for(var i = 0; i < projectList.length; i++) {
			if(projectList[i].title == title) {
				projectList[i].status = status;
			}
		}
	}
	 
	// Reset list of projects 
	this.resetProjectList = function() {
		projectList.length = 0;
		currentNumberOfProjects = 0;
	}
	 
	// Set project deadline 
	this.setProjectDeadline = function(title, deadline) {
		for(var i = 0; i < projectList.length; i++) {
			if(projectList[i].title == title) {
				projectList[i].deadline = deadline;
			}
		}
	}
	 
	// Set project description 
	this.setProjectDescription = function(title, description) {
		for(var i = 0; i < projectList.length; i++) {
			if(projectList[i].title == title) {
				projectList[i].description = description;
			}
		}
	}
	 
	// Get total number of projects 
	this.getTotalNumberOfProjects = function() {
		return totalNumberOfProjects;
	}
	 
}