#include<stdio.h>
int main(){
    char main[] = "harshit_shivam";
    char substring[] = "shiivam";
    int size_main = sizeof(main)/sizeof(main[0]);
    int size_substring = sizeof(substring)/sizeof(substring[0]);
    if(size_substring>size_main){
        printf("False");
    }
    int count=0;
    int j=0;
    int i=0;
    while(i<size_main){
        if (main[i]==substring[j]){
            i++;
            j++;
            count++;
        }
        else{
            i++;
            count=0;
            j=0;
        }

    }
    if(count==size_substring){
        printf("True");
    }else{
        printf("false");
    }

}

