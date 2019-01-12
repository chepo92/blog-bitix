package io.github.picodotdev.grails.controllers

import javax.servlet.http.HttpServletResponse

import grails.converters.JSON
import grails.util.Environment

import io.github.picodotdev.grails.domain.Autor
import io.github.picodotdev.grails.log.HibernateLogger

class HibernateController {

    def sessionFactory

	def doTest() {
		def autor = new Autor(nombre:'picodotdev')
		autor.save()

		autor = Autor.get(autor.id)
		autor.delete()

		return redirect(action:'index')
	}

    def index() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}
    
        def model = [estadisticas:sessionFactory.statistics]
        
        return render(view:'/hibernate/index', model:model)
    }

    def enableStatistics() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}

		// Habilitar estadístics
		sessionFactory.statistics.setStatisticsEnabled(true)
    
		redirect(action:'index')
    }

    def disableStatistics() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}

		// Deshabilitar estadísticas
		sessionFactory.statistics.setStatisticsEnabled(false)
    	
		redirect(action:'index')
    }

    def clearEstadisticas() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}
    
		sessionFactory.statistics.clear()
		redirect(action:'index')
    }
    
    def clearMensajesHibernate() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}
    
		HibernateLogger.clear()
		redirect(action:'index')
    }

    def logSummary() {
    	def e = test()
    	if (!e) {
    		return response.sendError(HttpServletResponse.SC_FORBIDDEN)
    	}
    
		sessionFactory.statistics.logSummary()
		redirect(action:'index')
    }
    
    private boolean test() {
       	if (Environment.current != Environment.DEVELOPMENT) {
    		return false
    	}
    	return true
    }
}