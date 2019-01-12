t = a+b
u = t+c
v = u+d
if v:
   w = kern_mem[address]   # si se llega aquí se produce un fallo
   x = w & 0x100           # operación de bit and
   y = user_mem[x]