    ...

    public static void main(String[] args) throws Exception {
    	Writer w = new MultipleWriter(new OutputStreamWriter(System.out), new OutputStreamWriter(System.out));
    	w.write("¡Hola mundo!\n");
    	w.flush();
    	w.close();
    }

    ...