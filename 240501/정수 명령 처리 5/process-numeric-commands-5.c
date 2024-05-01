#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define INITIAL_CAPACITY 10

// 동적 배열 구조체 정의
typedef struct {
    int *arr;
    int size;
    int capacity;
} DynamicArray;

// 동적 배열 초기화 함수
void init(DynamicArray *darr) {
    darr->arr = (int *)malloc(sizeof(int) * INITIAL_CAPACITY);
    darr->size = 0;
    darr->capacity = INITIAL_CAPACITY;
}

// 동적 배열의 크기를 조절하는 함수
void resize(DynamicArray *darr, int new_capacity) {
    darr->arr = (int *)realloc(darr->arr, sizeof(int) * new_capacity);
    darr->capacity = new_capacity;
}

// 동적 배열에 원소를 추가하는 함수
void push_back(DynamicArray *darr, int num) {
    if (darr->size == darr->capacity) {
        resize(darr, darr->capacity * 2);
    }
    darr->arr[darr->size++] = num;
}

// 동적 배열의 맨 뒤 원소를 삭제하는 함수
void pop_back(DynamicArray *darr) {
    if (darr->size > 0) {
        darr->size--;
    }
}

// 동적 배열의 크기를 반환하는 함수
int size(DynamicArray *darr) {
    return darr->size;
}

// 동적 배열의 k번째 원소를 반환하는 함수
int get(DynamicArray *darr, int k) {
    return darr->arr[k - 1];
}

int main() {
    int N;
    scanf("%d", &N);

    DynamicArray darr;
    init(&darr);

    char command[20];
    int num, k;
    for (int i = 0; i < N; i++) {
        scanf("%s", command);
        if (strcmp(command, "push_back") == 0) {
            scanf("%d", &num);
            push_back(&darr, num);
        } else if (strcmp(command, "pop_back") == 0) {
            pop_back(&darr);
        } else if (strcmp(command, "size") == 0) {
            printf("%d\n", size(&darr));
        } else if (strcmp(command, "get") == 0) {
            scanf("%d", &k);
            printf("%d\n", get(&darr, k));
        }
    }

    free(darr.arr); // 동적 배열 메모리 해제
    return 0;
}