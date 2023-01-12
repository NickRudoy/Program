def filter_string(text, char):
    result = ''
    for init_char in text: 
        if init_char.upper() != char.upper():
            result += init_char
    return result.strip()