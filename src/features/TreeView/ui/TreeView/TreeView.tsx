import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TreeNode } from '../TreeNode/TreeNode';
import { ITreeValue } from '../..';

interface TreeViewProps {
  className?: string;
  data: ITreeValue[];
}

export const TreeView = memo((props: TreeViewProps) => {
    const { className, data } = props;
    return (
        <ul className={classNames('', {}, [className])}>
            {data.map((node) => (
                <TreeNode key={node.id} node={node} />
            ))}
        </ul>
    );
});
