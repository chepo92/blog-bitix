...

public class Main {

    public static void main(String[] args) {
        TreeNode left = new TreeNode(null, null, 13);
        TreeNode right = new TreeNode(null, null, 19);
        TreeNode root = new TreeNode(left, right, 17);
        ...
        root.setRight(new TreeNode(null, null, 21));
    }
}
