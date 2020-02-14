#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr;

    // allocate memory
    ptr = (int*) malloc(1 * sizeof(int));

    // if memory cannot be allocated
    if(ptr == NULL)
    {
        printf("Error! memory not allocated.");
        exit(0);
    }

    printf("Enter a number: ");
    scanf("%d", ptr);

    // print the number
    printf("Number = %d\n", *ptr);
    
    // deallocating the memory
    free(ptr);

    return 0;
}