import { View } from 'react-native';
import {
  CurioMechanismIllustration,
  type MechanismIllustrationName,
} from './IllustrationSystem';

export type SceneName =
  | 'airflow'
  | 'temperature'
  | 'structure'
  | 'decentralized'
  | 'cycle'
  | 'recall'
  | 'connection'
  | 'complete';

const sceneToIllustration: Record<SceneName, MechanismIllustrationName> = {
  airflow: 'airflow',
  temperature: 'temperature-difference',
  structure: 'structure-paths',
  decentralized: 'decentralized',
  cycle: 'daily-cycle',
  recall: 'recall',
  connection: 'connection',
  complete: 'complete',
};

export function CurioScene({ name }: { name: SceneName }) {
  return (
    <View
      accessibilityElementsHidden
      style={{ alignItems: 'center', marginVertical: 18 }}
    >
      <CurioMechanismIllustration name={sceneToIllustration[name]} />
    </View>
  );
}

export {
  CurioEmptyStateIllustration,
  CurioMechanismIllustration,
  CurioTopicVisual,
} from './IllustrationSystem';

export type {
  EmptyStateIllustrationName,
  MechanismIllustrationName,
  TopicVisualName,
} from './IllustrationSystem';
