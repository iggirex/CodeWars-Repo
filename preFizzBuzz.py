Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected outputs: an array of positive integers from 1 to n

Your job is to write an algorithm that gets you from the input to the output.

def pre_fizz(n):
    results = []
    for i in range(1, n + 1):
        results.append(i)
    return results
    
    
    -------------->
    
    
    def pre_fizz(n):
    #your code here
    return list(range(1, n+1))
