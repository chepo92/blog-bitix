   select "PRODUCTO"."ID", "PRODUCTO"."NOMBRE", "PRODUCTO"."DESCRIPCION", "PRODUCTO"."CANTIDAD", "PRODUCTO"."FECHA"
     from "PRODUCTO"
    where ("PRODUCTO"."CANTIDAD", "PRODUCTO"."ID") > (cast(? as bigint), cast(? as bigint))
 order by "PRODUCTO"."CANTIDAD", "PRODUCTO"."ID" limit ?