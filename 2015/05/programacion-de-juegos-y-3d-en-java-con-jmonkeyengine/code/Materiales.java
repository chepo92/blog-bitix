package io.github.picodotdev.blogbitix.jmonkeyengine;

import com.jme3.app.SimpleApplication;
import com.jme3.light.AmbientLight;
import com.jme3.light.DirectionalLight;
import com.jme3.material.Material;
import com.jme3.material.RenderState.BlendMode;
import com.jme3.math.ColorRGBA;
import com.jme3.math.Vector3f;
import com.jme3.renderer.RenderManager;
import com.jme3.renderer.queue.RenderQueue.Bucket;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Box;
import com.jme3.scene.shape.Sphere;

/**
 * Aplicando texturas y materiales a geometrías.
 */
public class Materiales extends SimpleApplication {

	public static void main(String[] args) {
		Materials app = new Materials();
		app.start();
	}

	@Override
	public void simpleInitApp() {
		flyCam.setMoveSpeed(15);
		initializeLight();

		Geometry geometry1 = buildBoxUnshaded("Box");
		Geometry geometry2 = buildBoxShaded("Box Shaded");
		Geometry geometry3 = buildBoxTransparent("Box Transparent");
		Geometry geometry4 = buildBoxWireframe("Box Wireframe");
		Geometry geometry5 = buildSphereLighting("Sphere Lighting");
		Geometry geometry6 = buildSphereShiny("Sphere Shiny");
		Geometry geometry7 = buildWindow("window");

		geometry1.setLocalTranslation(-5, 0, 0);
		geometry2.setLocalTranslation(-2, 0, 0);
		geometry3.setLocalTranslation(1, 0, 0);
		geometry4.setLocalTranslation(4, 0, 0);
		geometry5.setLocalTranslation(7, 0, 0);
		geometry6.setLocalTranslation(10, 0, 0);
		geometry7.setLocalTranslation(13, 0, 0);

		rootNode.attachChild(geometry1);
		rootNode.attachChild(geometry2);
		rootNode.attachChild(geometry3);
		rootNode.attachChild(geometry4);
		rootNode.attachChild(geometry5);
		rootNode.attachChild(geometry6);
		rootNode.attachChild(geometry7);
	}

	@Override
	public void simpleUpdate(float tpf) {
	}

	@Override
	public void simpleRender(RenderManager rm) {
	}

	private Geometry buildBoxUnshaded(String name) {
		Box sphere = new Box(1, 1, 1);

		Material material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
		material.setColor("Color", ColorRGBA.White);
		material.setTexture("ColorMap", assetManager.loadTexture("assets/interface/Monkey.png"));
		material.setTexture("LightMap", assetManager.loadTexture("assets/interface/Monkey_light.png"));

		Geometry geometry = new Geometry(name, sphere);
		geometry.setMaterial(material);

		return geometry;
	}

	private Geometry buildBoxShaded(String name) {
		Box box = new Box(1, 1, 1);

		Material material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
		material.setBoolean("UseMaterialColors", true);
		material.setColor("Diffuse", ColorRGBA.White);
		material.setColor("Ambient", ColorRGBA.Gray);
		material.setTexture("DiffuseMap", assetManager.loadTexture("assets/interface/Monkey.png"));

		Geometry geometry = new Geometry(name, box);
		geometry.setMaterial(material);
		
		return geometry;
	}
	
	private Geometry buildBoxTransparent(String name) {
		Box box = new Box(1, 1, 1);

		Material material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
		material.setBoolean("UseMaterialColors", true);
		material.setColor("Diffuse", ColorRGBA.White);
		material.setColor("Ambient", ColorRGBA.Gray);
		material.setTexture("DiffuseMap", assetManager.loadTexture("assets/interface/Monkey.png"));

		material.getAdditionalRenderState().setAlphaTest(true);
		material.getAdditionalRenderState().setAlphaFallOff(0.5f);
		
		Geometry geometry = new Geometry(name, box);
		geometry.setMaterial(material);
		
		geometry.setQueueBucket(Bucket.Transparent);

		return geometry;
	}
	
	private Geometry buildBoxWireframe(String name) {
		Box box = new Box(1, 1, 1);

		Material material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
		material.getAdditionalRenderState().setWireframe(true);

		Geometry geometry = new Geometry(name, box);
		geometry.setMaterial(material);
		
		geometry.setQueueBucket(Bucket.Transparent);

		return geometry;
	}

	private Geometry buildSphereLighting(String name) {
		Sphere sphere = new Sphere(32, 32, 1f);

		Material material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
		material.setBoolean("UseMaterialColors", true);
		material.setColor("Diffuse", ColorRGBA.Blue);
		material.setColor("Ambient", ColorRGBA.Gray);

		Geometry geometry = new Geometry(name, sphere);
		geometry.setMaterial(material);

		return geometry;
	}

	private Geometry buildSphereShiny(String name) {
		Sphere sphere = new Sphere(32, 32, 1f);

		Material material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
		material.setBoolean("UseMaterialColors", true);
		material.setColor("Diffuse", ColorRGBA.Blue);
		material.setColor("Ambient", ColorRGBA.Gray);
		material.setColor("Specular", ColorRGBA.White);
		material.setFloat("Shininess", 64f);
		
		Geometry geometry = new Geometry(name, sphere);
		geometry.setMaterial(material);
		
		return geometry;
	}

	private Geometry buildWindow(String name) {
		Box box = new Box(1, 1, 1);
				
		Material material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
		material.setTexture("DiffuseMap", assetManager.loadTexture("assets/interface/mucha-window.png"));
		material.getAdditionalRenderState().setBlendMode(BlendMode.Alpha);
		
		Geometry geometry = new Geometry(name, box);
		geometry.setMaterial(material);
		geometry.setQueueBucket(Bucket.Transparent);
		
		return geometry;
	}

	private void initializeLight() {
		DirectionalLight sun = new DirectionalLight();
		sun.setDirection(new Vector3f(1, 0, -2));
		sun.setColor(ColorRGBA.White);
		rootNode.addLight(sun);

		AmbientLight ambient = new AmbientLight();
		ambient.setColor(ColorRGBA.White);
		rootNode.addLight(ambient);
	}
}