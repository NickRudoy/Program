def is_palindrome(text):
    i = -1 
    new_string = ""
    reverse_string = ""
     
    for letter in text:
        if letter != " ":
            new_string += letter
        if text[i] != " ":   
            reverse_string += text[i]
        i -= 1  
    
    if new_string.lower() == reverse_string.lower(): 
        return True
    return False