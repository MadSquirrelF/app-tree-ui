import { memo } from 'react';
import { MainLayout } from '../MainLayout/MainLayout';
import styles from './AppLoaderLayout.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const AppLoaderLayout = memo(() => (
    <MainLayout
        header={(
            <HStack max justify="between" className={styles.header} align="start">
                <HStack justify="start" gap="32" align="start">
                    <Skeleton width={40} height={40} border="50%" />
                    <Skeleton width={175} height={30} border="10px" />
                </HStack>
                <HStack justify="start" gap="32" align="start">
                    <Skeleton width={40} height={40} border="10px" />
                    <Skeleton width={40} height={40} border="10px" />
                    <Skeleton width={100} height={40} border="10px" />
                    <Skeleton width={100} height={40} border="10px" />
                </HStack>
            </HStack>
        )}
        content={(
            <VStack max gap="16" justify="start" align="start" className={styles.content}>
                <Skeleton width="20%" height={32} border="10px" />
                <Skeleton width="100%" height="70%" border="20px" />
                <Skeleton width="100%" height="70%" border="20px" />
            </VStack>
        )}
    />
));
