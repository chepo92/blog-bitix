System.out.println("");
System.out.println("# async with callback");
{
    AsynchronousFileChannel channel = AsynchronousFileChannel.open(file, StandardOpenOption.READ);
    ByteBuffer buffer = ByteBuffer.allocate(100_000);
    channel.read(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {
        public void completed(Integer result, ByteBuffer buffer) {
            try {
                System.out.println(new String(buffer.array(), "utf-8"));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }

        public void failed(Throwable exception, ByteBuffer attachment) {
            System.out.println(exception.getMessage());
        }
    });

    Thread.sleep(2000);
}