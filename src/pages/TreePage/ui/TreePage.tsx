import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextBold, TextSize } from '@/shared/ui/Text/Text';
import { ITreeValue, TreeView } from '@/features/TreeView';

const treeValues: ITreeValue[] = [
    {
        id: '1',
        name: 'Спорт',
        children: [
            {
                id: '2',
                name: 'Команда',
                children: [
                    {
                        id: '3',
                        name: 'Хоккей',
                        children: [
                            {
                                id: '4',
                                name: 'Трактор',
                                children: [],
                            },
                            {
                                id: '5',
                                name: 'ЦСКА',
                                children: [],
                            },
                            {
                                id: '6',
                                name: 'Северсталь',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: '7',
                        name: 'Футбол',
                        children: [
                            {
                                id: '8',
                                name: 'Барселона',
                                children: [],
                            },
                            {
                                id: '9',
                                name: 'Динамо',
                                children: [],
                            },
                            {
                                id: '10',
                                name: 'Спартак',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: '11',
                        name: 'Баскетбол',
                        children: [
                            {
                                id: '12',
                                name: 'Лейкерс',
                                children: [],
                            },
                            {
                                id: '13',
                                name: 'Короли',
                                children: [],
                            },
                            {
                                id: '14',
                                name: 'Рапторы',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: '15',
                name: 'Спортсмен',
                children: [
                    {
                        id: '16',
                        name: 'Тенис',
                        children: [
                            {
                                id: '17',
                                name: 'Новак Джокович',
                                children: [],
                            },
                            {
                                id: '18',
                                name: 'Роджер Федерер',
                                children: [],
                            },
                            {
                                id: '19',
                                name: 'Рафаэль Надаль',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: '20',
                        name: 'Шахматы',
                        children: [
                            {
                                id: '21',
                                name: 'Магнус Карлсен',
                                children: [],
                            },
                            {
                                id: '22',
                                name: 'Ян Непомнящий',
                                children: [],
                            },
                            {
                                id: '23',
                                name: 'Анатолий Карпов',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: '24',
                        name: 'Бокс',
                        children: [
                            {
                                id: '25',
                                name: 'Мухамед Али',
                                children: [],
                            },
                            {
                                id: '26',
                                name: 'Рокки Бальбо',
                                children: [],
                            },
                            {
                                id: '27',
                                name: 'Аполо Крид',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const TreePage = () => (
    <Page>
        <VStack max align="start" gap="50" className="block">
            <Text
                title="Дерево подразделений спорта"
                bold={TextBold.BOLD}
                size={TextSize.L}
                gap="16"
                text="Список категоризирован по видам спорта,
                      командным видам спорта (хоккей, футбол с упоминанием конкретных команд, таких как Барселона, Динамо и Спартак),
                      а также индивидуальным видам спорта или дисциплинам, таким как теннис,
                      шахматы (с упоминанием известных шахматистов, таких как Магнус Карлсен, Ян Непомнящий и Анатолий Карпов)
                      и бокс."
            />

            <TreeView data={treeValues} />

        </VStack>
    </Page>

);

export default TreePage;
