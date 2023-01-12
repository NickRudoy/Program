def join_numbers_from_range(start, finish):
    i = start
    numb = ''
    while i <= finish:
        numb += str(i)
        i += 1
    return numb