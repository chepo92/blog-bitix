// TypeErasure to Object
public class Node<T> {

  private T data;
  private Node<T> next;

  public Node(T data, Node<T> next) }
    this.data = data;
    this.next = next;
  }

  public T getData() { return data; }
  // ...
}

// Node type erased
public class Node {

  private Object data;
  private Node next;

  public Node(Object data, Node next) {
    this.data = data;
    this.next = next;
  }

  public Object getData() { return data; }
  // ...
}

// TypeErasure to Comparable
public class Node<T extends Comparable<T>> {

  private T data;
  private Node<T> next;

  public Node(T data, Node<T> next) {
    this.data = data;
    this.next = next;
  }

  public T getData() { return data; }
  // ...
}

// Node type erased
public class Node {

  private Comparable data;
  private Node next;

  public Node(Comparable data, Node next) {
    this.data = data;
    this.next = next;
  }

  public Comparable getData() { return data; }
  // ...
}
