#Sorting algorithms used in api.py
#InserSort, QuickSort, MergeSort
#based on 
#https://www.geeksforgeeks.org/python/sort-a-list-of-dictionaries-by-a-value-of-the-dictionary-python/


def insertionSort(arr, key=lambda x : x):

    for i in range(1, len(arr)):

        k = arr[i]
        j = i - 1
 
        while j >= 0 and key(k) < key(arr[j]):
            arr[j+1] = arr[j]
            j -= 1
        arr[j + 1] = k
    return arr
#TESTS
#arr = [{'name': 'Kevin', 'age': 19}, {'name': 'Harry', 'age': 20}, {'name': 'Robin', 'age': 21}]

#ans =insertionSort(arr,key=lambda item: item['name']) 

#print(ans)

def quickSort(arr, key=lambda x: x):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    pivot_key = key(pivot)

    left = []
    middle = []
    right = []

    for item in arr:
        k = key(item)
        if k < pivot_key:
            left.append(item)
        elif k > pivot_key:
            right.append(item)
        else:
            middle.append(item)

    return quickSort(left, key) + middle + quickSort(right, key) 

#TESTS
#arr = [{'name': 'Kevin', 'age': 19}, {'name': 'Harry', 'age': 20}, {'name': 'Robin', 'age': 21}]

#ans =quickSort(arr,key=lambda item: item['age'])

#print(ans) 