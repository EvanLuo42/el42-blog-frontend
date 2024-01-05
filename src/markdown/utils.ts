export class TreeNode<T> {
  public children: TreeNode<T>[] = []
  public constructor(public data: T) {}
}