package io.github.picodotdev.grails.log;

import org.apache.log4j.AppenderSkeleton;
import org.apache.log4j.spi.LoggingEvent;

public class HibernateAppender extends AppenderSkeleton {

	public void append(LoggingEvent event) {
		if (event.getLoggerName().equals("org.hibernate.SQL")) {
			HibernateLogger.getInstance().logHQL(event.getRenderedMessage());
		} else if (event.getLoggerName().equals("org.hibernate.type.descriptor.sql.BasicBinder")) {
			HibernateLogger.getInstance().logParam(event.getRenderedMessage());
		}
	}
	
	public boolean requiresLayout() {
		return false;
	}
	
	public void close() {
	}
}