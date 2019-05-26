(x, y) -> x.process.(y)

(var x, var y) -> x.process.(y)
  
(@NotNull var x, @NotNull var y) -> x.process.(y)
  
(var x, y) -> x.process.(y) // no se puede mezclar var y no var
(var x, int y) -> x.process.(y) // no se puede mezclar var y tipos en lamdas explícitas