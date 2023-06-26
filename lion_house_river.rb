class ProjectProBono

  # constructor
  def initialize
  	@users = Hash.new
  	@projects = Hash.new
  	@project_records = Hash.new
  end
  
  #Sign up new user
  def user_signup(name,email,password)
  	#Create new user
  	user = User.new
  	user.name = name
  	user.email = email
  	user.password = password

  	#Add to users array
  	@users[name] = user
  end

  #Create new project
  def project_create(name, description)
  	#create new project
  	project = Project.new
  	project.name = name
  	project.description = description

  	#Add to projects array
  	@projects[name] = project
  end

  #Add New Project Record
  def project_record_add(name,project_name)
  	#Create new Project Record
  	record = ProjectRecord.new
  	record.name = name
  	record.project_name = project_name

  	#Add to Project Records Array
  	@project_records[name] = record
  end

  #Edit Project Record
  def project_record_edit(name, new_project_name)
  	#Edit Project Record
  	record = @project_records[name]
  	record.project_name = new_project_name

  	#Update Project Records Array
  	@project_records[name] = record
  end

  #Remove Project Record
  def project_record_remove(name)
  	#Remove from Project Records Array
  	@project_records.delete(name)
  end

  #Edit User
  def user_edit(name, new_name, new_email, new_password)
  	#Edit User
  	user = @users[name]
  	user.name = new_name
  	user.email = new_email
  	user.password = new_password
  end

  #Edit Project
  def project_edit(name, new_name, new_description)
  	#Edit Project
  	project = @projects[name]
  	project.name = new_name
  	project.description = new_description
  end

  #Remove User
  def user_remove(name)
  	#Remove from Users Array
  	@users.delete(name)
  end

  #Remove Project
  def project_remove(name)
  	#Remove from Projects Array
  	@projects.delete(name)
  end

  #List Users
  def user_list
  	@users.each_key do |key|
  		user = @users[key]
  		puts "#{user.name} #{user.email}"
  	end
  end

  #List Projects
  def project_list
  	@projects.each_key do |key|
  		project = @projects[key]
  		puts "#{project.name} #{project.description}"
  	end
  end

  #List Project Records
  def project_record_list
  	@project_records.each_key do |key|
  		record = @project_records[key]
  		puts "#{record.name} #{record.project_name}"
  	end
  end

end

class User

	attr_accessor :name, :email, :password
	
	# constructor
	def initialize
		@name = ""
		@email = ""
		@password = ""
	end

end

class Project

	attr_accessor :name, :description

	# constructor
	def initialize
		@name = ""
		@description = ""
	end

end

class ProjectRecord

	attr_accessor :name, :project_name

	# constructor
	def initialize
		@name = ""
		@project_name = ""
	end

end