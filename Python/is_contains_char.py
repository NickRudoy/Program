def is_contains_char(string, char):
    i = 0
    count = 0
    while i < len(string):
        if string[i].upper() == char.upper():
            count += 1
            return True
        i += 1
    return False