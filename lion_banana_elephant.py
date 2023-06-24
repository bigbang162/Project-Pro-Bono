def main():
    print("Welcome to project Pro Bono!")
    user_input = input("What do you wish to do? (a) donate, (b) join a project, (c) volunteer: ")
    if user_input == 'a':
        donate()
    elif user_input == 'b':
        join_project()
    elif user_input == 'c':
        volunteer()
    else:
        print("Invalid input. Please enter a valid choice.")

def donate():
    user_amount = input("How much would you like to donate? ")
    try: 
        user_amount = float(user_amount)
        donate_fund(user_amount)
    except ValueError:
        print('Invalid Input. Please enter a valid number.')
        donate()

def donate_fund(user_amount):
    print('You are donating ' + str(user_amount) + ' to Project Pro Bono.')
    print('Thank you for your generosity!')

def join_project():
    user_project = input("Which project do you wish to join? ")
    valid_projects = ['Education', 'Healthcare', 'Housing']
    if user_project in valid_projects:
        project_info(user_project)
    else:
        print('Invalid input. Please enter a valid project.')
        join_project()

def project_info(user_project):
    if user_project == 'Education':
        print('This project focuses on providing educational support to disadvantaged communities.')
    elif user_project == 'Healthcare':
        print('This project focuses on providing healthcare support to disadvantaged communities.')
    elif user_project == 'Housing':
        print('This project focuses on providing housing support to disadvantaged communities.')

def volunteer():
    user_role = input("Which role would you like to volunteer for? (a) mentor, (b) educator, (c) outreach: ")
    if user_role == 'a':
        mentor_info()
    elif user_role == 'b':
        educator_info()
    elif user_role == 'c':
        outreach_info()
    else:
        print('Invalid input. Please enter a valid role.')
        volunteer()

def mentor_info():
    print('As a mentor, you will be responsible for providing guidance and support to the members of the project.')

def educator_info():
    print('As an educator, you will be responsible for providing educational resources and support to the members of the project.')

def outreach_info():
    print('As an outreach volunteer, you will be responsible for spreading awareness about the project to the public.')
    
if __name__ == '__main__':
    main()