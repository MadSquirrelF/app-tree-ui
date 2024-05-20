import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import style from './NotFoundPage.module.scss';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <Page className={classNames(style.NotFoundPage, {}, [className])}>
        <Text
            title="Страница не найдена"
            text="Попробуйте обновить страницу или перейти по другому адресу"
            gap="32"
            size={TextSize.XL}
        />
        <AppLink to="/">
            Назад
        </AppLink>

    </Page>
);
