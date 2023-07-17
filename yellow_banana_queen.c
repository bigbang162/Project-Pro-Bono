#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Structures for the project 
typedef struct volunteer {
	char name[100];
	char address[200];
	char skill[100];
} volunteer;

typedef struct organization {
	char name[100];
	char address[200];
	int number_of_volunteers;
	volunteer volunteer_list[100];
} organization;

// Function prototypes
void add_volunteer_to_organization(organization* org, volunteer* v);
void display_organization_details(organization *org);

int main() {
	// Declare and initialize organizations
	organization org1;
	strcpy(org1.name, "Organization 1");
	strcpy(org1.address, "123 Main Street");
	org1.number_of_volunteers = 0;

	organization org2;
	strcpy(org2.name, "Organization 2");
	strcpy(org2.address, "456 Main Street");
	org2.number_of_volunteers = 0;

	// Declare and initialize volunteers
	volunteer v1;
	strcpy(v1.name, "John Doe");
	strcpy(v1.address, "789 Main Street");
	strcpy(v1.skill, "Gardening");

	volunteer v2;
	strcpy(v2.name, "Jane Doe");
	strcpy(v2.address, "987 Main Street");
	strcpy(v2.skill, "Cooking");

	// Add volunteers to respective organizations
	add_volunteer_to_organization(&org1, &v1);
	add_volunteer_to_organization(&org1, &v2);

	add_volunteer_to_organization(&org2, &v1);

	// Display organization details
	display_organization_details(&org1);
	printf("\n");
	display_organization_details(&org2);

	return 0;
}

void add_volunteer_to_organization(organization* org, volunteer* v) {
	org->volunteer_list[org->number_of_volunteers] = *v;
	org->number_of_volunteers++;
}

void display_organization_details(organization *org) {
	printf("Name: %s\nAddress: %s\nNumber of Volunteers: %d\nVolunteers:\n", org->name, org->address, org->number_of_volunteers);
	for (int i = 0; i < org->number_of_volunteers; i++) {
		printf("  Name: %s\n  Address: %s\n  Skill: %s\n", org->volunteer_list[i].name, org->volunteer_list[i].address, org->volunteer_list[i].skill);
	}
}