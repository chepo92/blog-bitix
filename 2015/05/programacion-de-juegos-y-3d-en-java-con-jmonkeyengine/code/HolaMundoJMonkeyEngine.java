package io.github.picodotdev.blogbitix.jmonkeyengine;

import com.jme3.app.SimpleApplication;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.renderer.RenderManager;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Box;

/**
 * <h3>Ejemplo 1: Hola mundo</h3>
 * 
 * <p>Este ejemplo muestra el mínimo necesario para empezar con una aplicación
 * que use jMonkeyEngine. Sirve cmo punto de partida para comprobar que  
 * disponemos del entorno instalado correctamente que principalmente en extender
 * de la clase SimpleApplication y disponer de las librerías jar de jMonkeyEngine
 * en el classpath.</p>
 * 
 * <p>También muestra lo mínimo necesario para añadir elementos geométricos y que se
 * visualicen en la escena 3D.</>
 */
public class HolaMundoJMonkeyEngine extends SimpleApplication {

	public static void main(String[] args) {
		HolaMundoJMonkey app = new HolaMundoJMonkey();
		app.start();
	}

	@Override
	public void simpleInitApp() {
		Geometry geometry = buildBox();

		rootNode.attachChild(geometry);
	}

	@Override
	public void simpleUpdate(float tpf) {
	}

	@Override
	public void simpleRender(RenderManager rm) {
	}
	
	private Geometry buildBox() {
		Box box = new Box(1, 1, 1);
		
		Material material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
		material.setColor("Color", ColorRGBA.Blue);

		Geometry geometry = new Geometry("Box", box);
		geometry.setMaterial(material);
		
		return geometry;
	}
}
