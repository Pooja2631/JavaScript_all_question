# a = [1, 2, 3]
# a = tuple(a)
# a[0] = 2
# print(a)

# print(type(5 / 2))
# print(type(5 // 2))

# a = 3
# b = 1 
# print(a, b)
# a, b = b, a 
# print(a, b)

# square = lambda x: x ** 2
# a = []
# for i in range(5):
#    a.append(square(i))
   
# print(a)


# a = [1, 2, 3, 4]
# b = [3, 4, 5, 6]
# c = [x for x in a if x not in b]
# print(c)

# list

# list1=[1,4,"Gitam",6,"college"]
# list2=[] 
# list3=list((1,2,3))
# print(list1)
# print(list2)
# print(list3)

# tuple

# tuple1=(1,2,"college",9)
# tuple3=tuple((1,3,5,9,"hello"))
# print(tuple1)
# print(tuple3)

# set
# set1={1,2,3,4,5,"hello","tup"}
# set2={(1,8,"python",7)}
# print(set1)
# print(set2)

# dictonary
# dict1={"key1":"value1","key2":"value2"}
# dict3=dict({1:"apple",2:"cherry",3:"strawberry"})
# print(dict1)
# print(dict3)

# tuple update
# x = ("apple", "banana", "cherry")
# y = list(x)
# y[1] = "kiwi"
# x = tuple(y)
# print(x)


# i=1
# while i<=100:
#     j=2
#     co=0
#     while j<i:
#         if i%j==0:
#             co=co+1
#         j=j+1
#     if co==0:
#         print(i,"its prime number")
#     i=i+1
     
# a=int(input("enter the number:-")) 
# b=int(input("enter the number:-")) 
# for number in range (a,b + 1):  
#     if number > 1:  
#         for i in range (2, number):  
#             if (number % i) == 0:  
#                 break  
#         else:  
#             print (number)  



# fibonacci series

# n=int(input("enter number:-"))
# a=0
# b=1
# c=0
# while c<=n:
#     print(c)
#     a=b
#     b=c
#     c=a+b


# foo=[1,2,3,"a",None,(),[],]
# print(len(foo))

# arr=[1,2,3,4,5]
# i=-1
# a=[]
# while i>=-len(arr):
#     a.append(arr[i])
#     i=i-1
# print(a)

# A=int(input("enter the number"))
# B=int(input("enter the number"))
# if A%B==0:
#     print("YES")
# elif B%A==0:
#     print("YES")
# else:
#     print("NO")

# a=[1,2,3,4,5,23,8,6,78]
# i=0
# while i<len(a):
#     j=0
#     while j<len(a)-1:
#         if a[j]>a[j+1]:
#             a[j],a[j+1]=a[j+1],a[j]
#         j+=1
#     i=i+1
# print(a)

# a=[1,6,3,4,8,5,7,10]
# b=[0,9,2,11,15,13]
# l=[]
# c=0
# i=0
# j=0
# while i<len(a):
#     if a[i] not in l:
#         l.append(a[i])
#         l.append(b[j])
#     i=i+1
# c=l.sort()
# print(c)    


def num(a):
    sum=5
    x=1
    i=0
    l=[]
    while i<len(a):
        j=x
        while j<len(a):
            if a[i]+a[j]==sum:
                l.append(a[i])
                l.append(a[j])
            j+=1
        x+=1
        i+=1
    return l
print(num([1,3,-2,4,3,2,-3]))
