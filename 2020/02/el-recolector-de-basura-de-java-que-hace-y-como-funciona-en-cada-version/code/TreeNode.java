class TreeNode {

    private TreeNode left;
    private TreeNode right;
    private int data;

    TreeNode(TreeNode l, TreeNode r, int d) {
        this.left = l;
        this.right = r;
        this.data = d;
    }

    public void setLeft(TreeNode l) { 
        left = l;
    }

    public void setRight(TreeNode r) {
        right = r;
    }
}