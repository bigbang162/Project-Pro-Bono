#include <iostream> 
#include <string>
using namespace std; 

//function to calculate area of a square
float calcSquareArea (float side)
{
    float area = side * side;
    return area; 
}

//function to calculate area of a rectangle
float calcRectangleArea (float length, float width)
{
    float area = length * width;
    return area;
}

//function to calculate area of a triangle
float calcTriangleArea (float base, float height)
{
    float area = 0.5 * base * height;
    return area;
}

//function to calculate area of a circle
float calcCircleArea (float radius)
{
    float area = 3.14 * radius * radius ;
    return area;
}

// This function will check the user input for type of shape and calculate area
void calculateArea() 
{
    int choice; 
    cout << "Choose the type of shape for the area" << endl; 
    cout << "1. Square" << endl; 
    cout << "2. Rectangle" << endl; 
    cout << "3. Triangle" << endl; 
    cout << "4. Circle" << endl; 
    cout << "Enter your choice: ";
    cin >> choice; 
    float side, length, width, base, height, radius; 
    float area; 
    switch (choice)
    {
        case 1: 
            cout << "Enter Side length of Square: ";
            cin >> side;
            area = calcSquareArea(side); 
            break; 
        case 2: 
            cout << "Enter Length and Width of Rectangle: ";
            cin >> length >> width;
            area = calcRectangleArea(length, width); 
            break; 
        case 3: 
            cout << "Enter Base and Height of Triangle: ";
            cin >> base >> height; 
            area = calcTriangleArea(base, height); 
            break; 
        case 4: 
            cout << "Enter Radius of Circle: "; 
            cin >> radius; 
            area = calcCircleArea(radius); 
            break;
        default:
            area = 0; 
            break;  
    }
    cout << "The area of the shape is " << area << endl; 
}

int main()
{
    cout << "Welcome to Project Pro Bono!" << endl; 
    calculateArea(); 
    cout << "Thank you for using Project Pro Bono!" << endl;
    return 0; 
}