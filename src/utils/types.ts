import { Rule } from 'eslint';
import * as ESTree from 'estree';

export type NodeWithParent = ESTree.Node & Rule.NodeParentExtension;

export type TypedNodeWithParent<T extends ESTree.Node['type']> = Extract<
  ESTree.Node,
  { type: T }
> &
  Rule.NodeParentExtension;
