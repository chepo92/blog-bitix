t, w_ = a+b, kern_mem[address]
u, x_ = t+c, w_ & 0x100
v, y_ = u+d, user_mem[x_]
if v:
   w, x, y = w_, x_, y_      # nunca se llega aquí, si no fallo