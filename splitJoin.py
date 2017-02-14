Simple, remove the spaces from the string, then return the resultant string.

def no_space(x):
    result = []
    split = x.split(" ")
    split = "".join(split)
    return split
    
    -------------------->
    
    def no_space(x):
    return x.replace(' ' ,'')
