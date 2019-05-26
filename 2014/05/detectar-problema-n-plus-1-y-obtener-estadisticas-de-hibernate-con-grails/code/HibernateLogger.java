package io.github.picodotdev.grails.log;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class HibernateLogger {

	private static int MAX_LOGS = 1000;	
	private static LinkedList logs = new LinkedList();	
	private static HibernateLogger instance;
	
	public enum Type {
		HQL, PARAM, SQL, EXCEPTION, TEXT
	}
	
	public static HibernateLogger getInstance() {
		if (instance == null) {
			instance = new HibernateLogger();
		}
		return instance;
	}
	
	public void logHQL(String hql) {
        Map m = new HashMap();
        m.put("type", Type.HQL);
        m.put("date", new Date());
        m.put("hql", hql);
        
        add(m);
	}
	
	public void logParam(String param) {
        Map m = new HashMap();
        m.put("type", Type.PARAM);
   		m.put("date", new Date());
   		m.put("param", param);
        
        add(m);
	}
	
	public void logSQL(int connectionId, String now, long elapsed, String category, String prepared, String sql) {
        Map m = new HashMap();
        m.put("type", Type.SQL);
        m.put("date", new Date());
        m.put("connectionId", connectionId);
        m.put("now", now);
        m.put("elapsed", elapsed);
        m.put("category", category);
        m.put("prepared", prepared);
        m.put("sql", sql);
        
        add(m);
    }

    public void logException(Exception exception) {
        Map m = new HashMap();
        m.put("type", Type.EXCEPTION);
        m.put("date", new Date());
        m.put("exception", exception);

		add(m);
    }
    
    public void logText(String text) {
        Map m = new HashMap();
        m.put("type", Type.TEXT);
        m.put("date", new Date());    
        m.put("text", text);

		add(m);
    }
    
    public String getLastEntry() {
    	return "";
    }
    
    public static List get() {
    	return logs;
    }

    public static void clear() {
    	logs.clear();
    }
    
    private static synchronized void add(Map m) {
    	logs.addFirst(m);
    	if (logs.size() > MAX_LOGS) {
    		logs.removeLast();
    	}
    }
}