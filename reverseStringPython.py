You need to write a function that reverses the words in a given string. A word can also fit an empty string.

def reverse(st):
    arr = st.split(" ")
    arr.reverse()
    print (arr)
    rev = " ".join(arr)
    return rev
