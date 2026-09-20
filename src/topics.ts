import type { IconName } from './Visuals';

export type TopicId = string;

export type Topic = {
  id: TopicId;
  immersionId?: string;
  icon: IconName;
  color: 'orange' | 'green' | 'purple' | 'blue' | 'yellow';
  ready: boolean;
  ru: { title: string; description: string; first: string };
  en: { title: string; description: string; first: string };
};

export const topics: Topic[] = [
  {
    id: 'biomimicry',
    icon: 'leaf',
    color: 'green',
    ready: true,
    ru: {
      title: 'Биомимикрия',
      description: 'Как живые системы решают инженерные задачи.',
      first: 'Как воздух движется без вентилятора?',
    },
    en: {
      title: 'Biomimicry',
      description: 'How living systems solve engineering problems.',
      first: 'How can air move without a fan?',
    },
  },
  {
    id: 'neuroscience',
    icon: 'brain',
    color: 'purple',
    ready: false,
    ru: {
      title: 'Эволюционная нейробиология',
      description: 'Как и почему возникли нервные системы, восприятие и поведение.',
      first: 'Зачем мозгу предсказывать?',
    },
    en: {
      title: 'Evolutionary neuroscience',
      description: 'How and why nervous systems, perception, and behavior evolved.',
      first: 'Why does the brain predict?',
    },
  },
  {
    id: 'cognition',
    icon: 'bulb',
    color: 'yellow',
    ready: false,
    ru: {
      title: 'Когнитивная психология',
      description: 'Механизмы памяти, мышления, решений и обучения.',
      first: 'Почему память меняется каждый раз, когда мы вспоминаем?',
    },
    en: {
      title: 'Cognitive psychology',
      description: 'Mechanisms of memory, thinking, decisions, and learning.',
      first: 'Why can memory change when we recall it?',
    },
  },
  {
    id: 'social',
    icon: 'network',
    color: 'orange',
    ready: false,
    ru: {
      title: 'Социальные системы',
      description: 'Как связи, институты и локальные действия создают влияние.',
      first: 'Как влияние распространяется по сети?',
    },
    en: {
      title: 'Social systems',
      description: 'How networks, institutions, and local actions create influence.',
      first: 'How does influence spread through a network?',
    },
  },
  {
    id: 'complex',
    icon: 'atom',
    color: 'blue',
    ready: false,
    ru: {
      title: 'Сложные системы',
      description: 'Как простые взаимодействия создают сложное поведение.',
      first: 'Как возникает порядок без центрального управления?',
    },
    en: {
      title: 'Complex systems',
      description: 'How simple interactions produce complex behavior.',
      first: 'How can order emerge without central control?',
    },
  },
];
