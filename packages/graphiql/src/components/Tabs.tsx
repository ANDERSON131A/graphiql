import { CloseIcon, PlusIcon, UnStyledButton } from '@graphiql/react';
import React, { ReactNode } from 'react';

/**
 * TODO: extract with other components to @graphiql/react
 */

function TabCloseButton(props: { onClick: () => void }) {
  return (
    <div
      role="button"
      aria-pressed={false}
      className="graphiql-tab-close"
      aria-label="Close Tab"
      title="Close Tab"
      onClick={ev => {
        ev.stopPropagation();
        props.onClick();
      }}>
      <CloseIcon />
    </div>
  );
}

export type TabProps = {
  isActive: boolean;
  title: string;
  isCloseable: boolean;
  onSelect: () => void;
  onClose: () => void;
  tabProps?: React.ButtonHTMLAttributes<{}>;
};

/**
 * Generic tab component that implements wai-aria tab spec
 */
export function Tab(props: TabProps): React.ReactElement {
  return (
    <UnStyledButton
      {...props.tabProps}
      role="tab"
      type="button"
      aria-selected={props.isActive}
      title={props.title}
      className={`graphiql-tab${props.isActive ? ' graphiql-tab-active' : ''}`}
      onClick={props.onSelect}>
      {props.title}
      {props.isCloseable ? (
        <TabCloseButton onClick={() => props.onClose()} />
      ) : null}
    </UnStyledButton>
  );
}

export function TabAddButton(props: { onClick: () => void }) {
  return (
    <UnStyledButton className="graphiql-add-tabs" onClick={props.onClick}>
      <PlusIcon />
    </UnStyledButton>
  );
}

export type TabsProps = {
  children: ReactNode;
  tabsProps?: React.HTMLAttributes<{}>;
};
/**
 * Generic tablist component that implements wai-aria tab spec
 */
export function Tabs(props: TabsProps) {
  return (
    <div role="tablist" className="graphiql-tabs" {...props.tabsProps}>
      {props.children}
    </div>
  );
}
