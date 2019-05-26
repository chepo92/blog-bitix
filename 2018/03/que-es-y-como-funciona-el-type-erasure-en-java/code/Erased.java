public class Node {

    public Object data;

    public Node(Object data) { this.data = data; }

    public void setData(Object data) {
        this.data = data;
    }
}

public class IntegerNode extends Node {

    public IntegerNode(Integer data) { super(data); }

    // Método bridge creado por el compilador
    // public void setData(Object data) {
    //    this.setData((Integer) data);
    // }

    public void setData(Integer data) {
        super.setData(data);
    }
}