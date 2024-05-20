import { Text, TextSize } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => (
    <Page data-testid="ForbiddenPage">
        <Text
            title="У вас не прав переходить на эту страницу"
            text="Попробуйте снача авторизоваться"
            gap="32"
            size={TextSize.XL}
        />
    </Page>
);

export default ForbiddenPage;
