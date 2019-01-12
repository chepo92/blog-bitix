interface PayloadList<E,P> extends List<E> {
  void setPayload(int index, P val);
  ...
}

PayloadList<String,String>
PayloadList<String,Integer>
PayloadList<String,Exception>