package io.github.picodotdev.blogbitix.config;

import java.io.FileReader;
import java.io.Reader;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.tools.JavaCompiler;
import javax.tools.JavaFileManager;
import javax.tools.JavaFileObject;
import javax.tools.ToolProvider;

public class ConfiguracionManager {

	...

	public ConfiguracionManager monitor() throws Exception {
		closed = false;

		Runnable task = new Runnable() {
			@Override
			public void run() {
				while (!closed) {
					try (WatchService watchService = FileSystems.getDefault().newWatchService()) {
						path.getParent().register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);
						WatchKey watchKey = watchService.take();
						if (watchKey == null) {
							return;
						}
						for (WatchEvent<?> event : watchKey.pollEvents()) {
							Path p = (Path) event.context();							
							Path pp = path.getParent().resolve(p);
							if (path.equals(pp)) {
								load();
							}
						}
					} catch (Exception e) {
						throw new RuntimeException(e);
					}
				}
			}
		};

		thread = new Thread(task);
		thread.setDaemon(true);
		thread.start();

		return this;
	}

	...
}