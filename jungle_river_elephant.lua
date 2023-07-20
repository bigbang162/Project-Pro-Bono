--// Project Pro Bono //-- 

--// Global Variables //-- 
local playerName = nil 
local numberOfProjectsCompleted = 0 
local challengeCompleted = false 

--// Functions //-- 

-- Set the player's name
function setPlayerName(name)
	playerName = name 
end 

-- Get the player's name
function getPlayerName()
	return playerName
end 

-- Increment the number of projects completed 
function incrementNumberOfProjectsCompleted()
	numberOfProjectsCompleted = numberOfProjectsCompleted + 1 
end 

-- Return the current number of projects completed 
function getNumberOfProjectsCompleted()
	return numberOfProjectsCompleted 
end 

-- Remove a player's challenge completion status
function resetChallengeCompleted()
	challengeCompleted = false 
end 

-- Set a player's challenge completion status
function setChallengeCompleted()
	challengeCompleted = true 
end 

-- Get a player's challenge completion status 
function getChallengeCompleted()
	return challengeCompleted
end 

-- Load the project database 
function loadProjectDatabase()
	-- Code to load the project database 
end 

-- Add a project to the database 
function addProjectToDatabase(project)
	-- Code to add a project to the database 
end 

-- Remove a project from the database
function removeProjectFromDatabase(project)
	-- Code to remove a project from the database
end 

-- Start the challenge
function startChallenge(challenge)
	-- Code to start the challenge 
end 

-- Get the challenge reward
function getChallengeReward()
	-- Code to get the reward for completing the challenge 
end 

-- Return the number of challenges left
function getNumberOfChallengesLeft()
	-- Code to get the number of challenges left
end 

-- Print the completed challenge message
function printCompletedChallengeMessage()
	-- Code to print the completed challenge message
end 

-- Start a new project
function startNewProject(projectName)
	-- Code to start a new project
end 

-- Get the project details
function getProjectDetails(projectName)
	-- Code to get the project details
end 

-- Update the project progress
function updateProjectProgress(projectName, progress)
	-- Code to update the project progress
end 

-- Get the project reward
function getProjectReward(projectName)
	-- Code to get the project reward
end 

-- Complete the project
function completeProject(projectName)
	-- Code to complete the project
end 

-- Helper function to print out the progress
function printProjectProgress(projectName, progress)
	-- Code to print out progress
end 

-- Main function 
function main()
	-- Code to main function  
end 

-- Call main 
main()