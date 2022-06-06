import { ComponentType, ReactNode } from 'react';

import {
  ArgumentIcon,
  ChevronLeftIcon,
  DeprecatedArgumentIcon,
  DeprecatedFieldIcon,
  FieldIcon,
  RootTypeIcon,
  TypeIcon,
} from '../../icons';

import './section.css';

type ExplorerSectionProps = {
  children: ReactNode;
  title:
    | 'Root types'
    | 'Fields'
    | 'Deprecated Fields'
    | 'Type'
    | 'Arguments'
    | 'Deprecated Arguments'
    | 'Implements'
    | 'Implementations'
    | 'Possible types'
    | 'Enum Values'
    | 'Deprecated Enum Values'
    | 'Directives';
};

export function ExplorerSection(props: ExplorerSectionProps) {
  const Icon = TYPE_TO_ICON[props.title];
  return (
    <div>
      <div className="graphiql-explorer-section-title">
        <Icon />
        {props.title}
      </div>
      <div className="graphiql-explorer-section-content">{props.children}</div>
    </div>
  );
}

const TYPE_TO_ICON: Record<ExplorerSectionProps['title'], ComponentType> = {
  Arguments: ArgumentIcon,
  'Deprecated Arguments': DeprecatedArgumentIcon,
  'Deprecated Enum Values': ChevronLeftIcon, // TODO: better icon
  'Deprecated Fields': DeprecatedFieldIcon,
  Directives: ChevronLeftIcon, // TODO: better icon
  'Enum Values': ChevronLeftIcon, // TODO: better icon
  Fields: FieldIcon,
  Implements: ChevronLeftIcon, // TODO: better icon
  Implementations: TypeIcon,
  'Possible types': TypeIcon,
  'Root types': RootTypeIcon,
  Type: TypeIcon,
};
