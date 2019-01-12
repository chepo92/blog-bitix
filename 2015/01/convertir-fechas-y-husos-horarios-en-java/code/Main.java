package io.github.picodotdev.timezone;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.TimeZone;

import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;

public class Main {

	public static void main(String[] args) {
		// JodaTime
		{
			DateTime fecha = new DateTime(2015, 1, 31, 12, 00, DateTimeZone.forID("Europe/Madrid"));

			System.out.println("JodaTime");
			System.out.printf("Hora Madrid:\t\t %s\n", fecha);
			System.out.printf("Hora Buenos Aires:\t %s\n", fecha.withZone(DateTimeZone.forID("America/Argentina/Buenos_Aires")));
		}
		
		// Java 8
		{
			ZonedDateTime fecha = ZonedDateTime.of(2015, 1, 31, 12, 00, 00, 00, ZoneId.of("Europe/Madrid"));

			System.out.println("\nJava 8");
			System.out.printf("Hora Madrid:\t\t %s\n", fecha);
			System.out.printf("Hora Buenos Aires:\t %s\n", fecha.withZoneSameInstant(ZoneId.of("America/Argentina/Buenos_Aires")));			
		}

		// Java 7
		{
			Calendar calendar = new GregorianCalendar();
			calendar.set(2015, 0, 31, 12, 0, 0);

			SimpleDateFormat sdfMadrid = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
			sdfMadrid.setTimeZone(TimeZone.getTimeZone("Europe/Madrid"));

			SimpleDateFormat sdfArgentina = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
			sdfArgentina.setTimeZone(TimeZone.getTimeZone("America/Argentina/Buenos_Aires"));

			System.out.println("\nJava 7");
			System.out.printf("Hora Madrid:\t\t %s\n", sdfMadrid.format(calendar.getTime()));
			System.out.printf("Hora Buenos Aires:\t %s\n", sdfArgentina.format(calendar.getTime()));
		}
	}
}