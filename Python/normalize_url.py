def normalize_url(url):
    url_norm = url[:8]
    url_dom = url[8:]
    url_char = url[:7]
    url_last = url[7:]
    if url_char == 'http://':
        url_math = 'https://' + url_last
    elif url_norm == 'https://':
        url_math = 'https://' + url_dom
    else:
       url_math  ='https://' + url
        
    return url_math

print(normalize_url('hoogle.com'))