import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './TreeNode.module.scss';
import { ITreeValue, TreeView } from '../..';
import EyeClosed from '@/shared/assets/icons/icon-closed-eye.svg';
import EyeOpened from '@/shared/assets/icons/icon-opened-eye.svg';
import DotIcon from '@/shared/assets/icons/dot.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextBold, TextSize } from '@/shared/ui/Text/Text';

interface TreeNodeProps {
  className?: string;
  node: ITreeValue;
}

export const TreeNode = memo((props: TreeNodeProps) => {
    const { className, node } = props;

    const [isOpen, setIsOpen] = useState(false);

    const toogleBranch = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={classNames(styles.TreeNode, {}, [className])}>
            <HStack max align="center" justify="start" gap="4" className={styles.container}>
                {
                    node.children.length > 0 ? (
                        <Button onClick={toogleBranch} theme={ThemeButton.SVG_CLEAN}>
                            {isOpen ? <EyeOpened /> : <EyeClosed />}
                        </Button>
                    ) : <DotIcon className={styles.dot} />
                }
                <Text text={node.name} gap="0" bold={TextBold.BOLD} size={TextSize.XXL} textPrimary className={styles.name} />
            </HStack>

            {
                isOpen && <TreeView data={node.children} className={classNames(styles.nested, {}, [])} />
            }

        </li>
    );
});
