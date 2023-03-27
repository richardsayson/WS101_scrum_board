print ("Hellow Richard")
#Shift cipher algorithm
let = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z"]
lett = input ("Input a word: ").lower()
ans=""
lentt = len(lett)
b=int(0)
shift =int(input ("Enter the shift of the cipher: "))
while b <= lentt-1:
     i=1
     while lett[b] != let[i]:
         i+=1
     ans+=let[i+shift]
     b+=1
print (ans)