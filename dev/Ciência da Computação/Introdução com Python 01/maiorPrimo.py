def maior_primo(n):
  for num in reversed(range(1,n+1)):
    if all(num%i!=0 for i in range(2,num)):
      print(num)
      return num
            


n = int(input("n: "))

maior_primo(n)
