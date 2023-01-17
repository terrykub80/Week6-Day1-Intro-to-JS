# my_string = 'My age is '
# my_age = 666

# added_string = my_string + my_age
# print(added_string)

print(5 == 5)
print( 5 == 5.0)
print (5 == '5')


list_a = [1, 2, 3, 4, 5]
list_b = [1, 2, 3, 4, 5]
list_c = list_a

print('------List Check------')
print("IDs:", id(list_a), id(list_b), id(list_c))
print (list_a == list_b)
print (list_a is  list_b)
print (list_a == list_c)
print (list_a is list_c)




