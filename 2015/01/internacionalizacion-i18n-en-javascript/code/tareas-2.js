i18n.t('COMPLETADAS_tareas_completadas_de_TOTAL', { count: 1, completadas: 1, total: 4 }); 
-> { count: 1 } -> COMPLETADAS_tareas_completadas_de_TOTAL -> 
-> __completadas__ tarea completada de __total__ + { completadas: 1, total: 4 }
-> 1 tarea completada de 4

i18n.t('COMPLETADAS_tareas_completadas_de_TOTAL', { count: 2, completadas: 2, total: 4 }); ->
-> { count: 2 } -> COMPLETADAS_tareas_completadas_de_TOTAL_plural
-> __completadas__ tareas completadas de __total__ + { completadas: 2, total: 4 }
-> 2 tareas completadas de 4