public class Node<T> {

    public T data;

    public Node(T data) { this.data = data; }

    public void setData(T data) {
        this.data = data;
    }
}

public class IntegerNode extends Node<Integer> {

    public IntegerNode(Integer data) { super(data); }
    
    public void setData(Integer data) {
        super.setData(data);
    }
}