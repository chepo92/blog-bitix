//
System.out.println("");
System.out.println("# async with Future");
{
    AsynchronousFileChannel channel = AsynchronousFileChannel.open(file, StandardOpenOption.READ);
    ByteBuffer buffer = ByteBuffer.allocate(100_000);
    Future<Integer> result = channel.read(buffer, 0);
    // ...
    Integer bytesRead = result.get();
    System.out.println(new String(buffer.array(), "utf-8"));
}