def my_substr(string, length):
    i = 0
    init_string = ''
    while i < length:
        init_string = init_string + string[i]
        i += 1
    return init_string