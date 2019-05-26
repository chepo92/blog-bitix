define(['react', 'tareas', 'i18next'], function(React, tareas, i18n) {
	i18n.init({ 
		lng: requirejs.s.contexts._.config.locale,
		getAsync: false,
		resGetPath: 'js/locales/__lng__/__ns__.json'
	});
	
	// ...
});