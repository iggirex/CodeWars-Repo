If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]


import math
def square_or_square_root(arr):
    result = []
    for item in arr:
        sq = math.sqrt(item)
        if(sq ==round(sq)):
            result.append(math.sqrt(item))
        else:
            result.append(item * item)
    return result
    
    ---------------->
    
from math import sqrt

def square_or_square_root(arr):
    return [int(sqrt(a)) if sqrt(a) % 1 == 0 else a ** 2 for a in arr]
