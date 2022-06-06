/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {
  Argument,
  Button,
  Directive,
  ExplorerFieldDef,
  ExplorerSection,
  MarkdownContent,
  TypeLink,
  useExplorerContext,
} from '@graphiql/react';
import { ConstDirectiveNode, GraphQLArgument, isType, Kind } from 'graphql';
import React, { useState } from 'react';

export default function FieldDoc() {
  const { explorerNavStack } = useExplorerContext({ nonNull: true });

  const navItem = explorerNavStack[explorerNavStack.length - 1];
  const field = navItem.def;
  if (!field || isType(field)) {
    return null;
  }

  return (
    <>
      {field.description ? (
        <MarkdownContent type="description">
          {field.description}
        </MarkdownContent>
      ) : null}
      {field.deprecationReason ? (
        <div className="graphiql-doc-explorer-deprecation">
          <div className="graphiql-doc-explorer-deprecation-label">
            Deprecated
          </div>
          <MarkdownContent type="deprecation">
            {field.deprecationReason}
          </MarkdownContent>
        </div>
      ) : null}
      <ExplorerSection title="Type">
        <TypeLink type={field.type} />
      </ExplorerSection>
      <Arguments field={field} />
      <Directives field={field} />
    </>
  );
}

function Arguments({ field }: { field: ExplorerFieldDef }) {
  const [showDeprecated, setShowDeprecated] = useState(false);

  if (!('args' in field)) {
    return null;
  }

  const args: GraphQLArgument[] = [];
  const deprecatedArgs: GraphQLArgument[] = [];
  for (const argument of field.args) {
    if (argument.deprecationReason) {
      deprecatedArgs.push(argument);
    } else {
      args.push(argument);
    }
  }

  return (
    <>
      {args.length > 0 ? (
        <ExplorerSection title="Arguments">
          {args.map(arg => (
            <Argument key={arg.name} arg={arg} />
          ))}
        </ExplorerSection>
      ) : null}
      {deprecatedArgs.length > 0 ? (
        showDeprecated || args.length === 0 ? (
          <ExplorerSection title="Deprecated Arguments">
            {deprecatedArgs.map(arg => (
              <Argument key={arg.name} arg={arg} />
            ))}
          </ExplorerSection>
        ) : (
          <Button
            onClick={() => {
              setShowDeprecated(true);
            }}>
            Show deprecated arguments
          </Button>
        )
      ) : null}
    </>
  );
}

const d: ConstDirectiveNode = {
  kind: Kind.DIRECTIVE,
  name: { kind: Kind.NAME, value: 'customStuff' },
};

function Directives({ field }: { field: ExplorerFieldDef }) {
  const directives = field.astNode?.directives || [d];
  if (!directives || directives.length === 0) {
    return null;
  }
  return (
    <ExplorerSection title="Directives">
      {directives.map(directive => (
        <div key={directive.name.value}>
          <Directive directive={directive} />
        </div>
      ))}
    </ExplorerSection>
  );
}
