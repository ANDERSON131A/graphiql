/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {
  ChevronLeftIcon,
  useExplorerContext,
  useSchemaContext,
} from '@graphiql/react';
import { GraphQLSchema, isType } from 'graphql';
import React, { ReactNode } from 'react';

import FieldDoc from './DocExplorer/FieldDoc';
import SchemaDoc from './DocExplorer/SchemaDoc';
// import SearchBox from './DocExplorer/SearchBox';
import SearchResults from './DocExplorer/SearchResults';
import TypeDoc from './DocExplorer/TypeDoc';

type DocExplorerProps = {
  /**
   * @deprecated Passing a schema prop directly to this component will be
   * removed in the next major version. Instead you need to wrap this component
   * with the `SchemaContextProvider` from `@graphiql/react`. This context
   * provider accepts a `schema` prop that you can use to skip fetching the
   * schema with an introspection request.
   */
  schema?: GraphQLSchema | null;
};

/**
 * DocExplorer
 *
 * Shows documentations for GraphQL definitions from the schema.
 *
 */
export function DocExplorer(props: DocExplorerProps) {
  const {
    fetchError,
    isFetching,
    schema: schemaFromContext,
    validationErrors,
  } = useSchemaContext({ nonNull: true });
  const { explorerNavStack, pop } = useExplorerContext({
    nonNull: true,
  });

  const navItem = explorerNavStack[explorerNavStack.length - 1];

  // The schema passed via props takes precedence until we remove the prop
  const schema = props.schema === undefined ? schemaFromContext : props.schema;

  let content: ReactNode = null;
  if (fetchError) {
    content = <div className="graphiql-error">Error fetching schema</div>;
  } else if (validationErrors) {
    content = (
      <div className="graphiql-error">
        Schema is invalid: {validationErrors[0].message}
      </div>
    );
  } else if (isFetching) {
    // Schema is undefined when it is being loaded via introspection.
    content = <div className="graphiql-spinner" />;
  } else if (!schema) {
    // Schema is null when it explicitly does not exist, typically due to
    // an error during introspection.
    content = <div>No GraphQL schema available</div>;
  } else if (navItem.search) {
    content = <SearchResults />;
  } else if (explorerNavStack.length === 1) {
    content = <SchemaDoc />;
  } else if (isType(navItem.def)) {
    content = <TypeDoc />;
  } else if (navItem.def) {
    content = <FieldDoc />;
  }

  // const shouldSearchBoxAppear =
  //   explorerNavStack.length === 1 ||
  //   (isType(navItem.def) && 'getFields' in navItem.def);

  let prevName;
  if (explorerNavStack.length > 1) {
    prevName = explorerNavStack[explorerNavStack.length - 2].name;
  }

  return (
    <section
      className="graphiql-doc-explorer"
      aria-label="Documentation Explorer">
      <div className="graphiql-doc-explorer-header">
        <div className="graphiql-doc-explorer-header-content">
          {prevName && (
            <a
              href="#"
              className="graphiql-doc-explorer-back"
              onClick={pop}
              aria-label={`Go back to ${prevName}`}>
              <ChevronLeftIcon />
              {prevName}
            </a>
          )}
          <div className="graphiql-doc-explorer-title">
            {navItem.title || navItem.name}
          </div>
        </div>
      </div>
      <div className="graphiql-doc-explorer-content">
        {/* {shouldSearchBoxAppear && (
          <SearchBox
            value={navItem.search}
            placeholder={`Search ${navItem.name}...`}
            onSearch={showSearch}
          />
        )} */}
        {content}
      </div>
    </section>
  );
}
