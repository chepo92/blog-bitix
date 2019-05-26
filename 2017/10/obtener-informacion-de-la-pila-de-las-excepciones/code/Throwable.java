Thread.currentThread().dumpStack();

try { throw new Exception(); } catch(Exception e) { e.printStackTrace(); }

try { throw new Exception(); } catch(Exception e) {
    System.out.println(e.getClass().getName());
    Arrays.asList(e.getStackTrace()).stream().limit(3).forEach(s -> 
        System.out.println(String.format("\tat %s%s.%s(%s)",
            (s.getModuleName() == null) ? "" : String.format("%s/", s.getModuleName()),
            s.getClassName(),
            s.getMethodName(),
            (s.isNativeMethod() ? "Native Method" : String.format("%s:%d", s.getFileName(), s.getLineNumber())))));
}