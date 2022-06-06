/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {
  ExplorerSection,
  MarkdownContent,
  TypeLink,
  useExplorerContext,
  useSchemaContext,
} from '@graphiql/react';
import React from 'react';

// Render the top level Schema
export default function SchemaDoc() {
  const { schema } = useSchemaContext({ nonNull: true });
  const { explorerNavStack } = useExplorerContext({ nonNull: true });
  if (!schema || explorerNavStack.length > 1) {
    return null;
  }

  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType?.();
  const subscriptionType = schema.getSubscriptionType?.();

  return (
    <>
      <MarkdownContent type="description">
        {schema.description ||
          'A GraphQL schema provides a root type for each kind of operation.'}
      </MarkdownContent>
      <ExplorerSection title="Root types">
        {queryType ? (
          <div>
            <span className="graphiql-doc-explorer-root-type">query: </span>
            <TypeLink type={queryType} />
          </div>
        ) : null}
        {mutationType && (
          <div>
            <span className="graphiql-doc-explorer-root-type">mutation: </span>
            <TypeLink type={mutationType} />
          </div>
        )}
        {subscriptionType && (
          <div>
            <span className="graphiql-doc-explorer-root-type">
              subscription:{' '}
            </span>
            <TypeLink type={subscriptionType} />
          </div>
        )}
      </ExplorerSection>
    </>
  );
}
