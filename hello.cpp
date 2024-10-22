#include <iostream>
using namespace std;

char str[] = "Hello";

// Function defined outside of main
void greet() {
    printf("%s", str);  // Correctly passing the array and using %s to format a string
}

int main() {
    // Calling the function from within main
    greet();
    return 0;
}
