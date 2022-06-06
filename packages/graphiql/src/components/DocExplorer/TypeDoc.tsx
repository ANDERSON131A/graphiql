/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {
  Argument,
  Button,
  DefaultValue,
  ExplorerFieldDef,
  ExplorerSection,
  FieldLink,
  MarkdownContent,
  TypeLink,
  useExplorerContext,
  useSchemaContext,
} from '@graphiql/react';
import {
  GraphQLEnumValue,
  GraphQLNamedType,
  isAbstractType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isNamedType,
  isObjectType,
} from 'graphql';
import React, { useState } from 'react';

export default function TypeDoc() {
  const { schema } = useSchemaContext({ nonNull: true });
  const { explorerNavStack } = useExplorerContext({ nonNull: true });

  const navItem = explorerNavStack[explorerNavStack.length - 1];
  const type = navItem.def;

  if (!schema || !isNamedType(type)) {
    return null;
  }

  return (
    <>
      {type.description ? (
        <MarkdownContent type="description">{type.description}</MarkdownContent>
      ) : null}
      <ImplementsInterfaces type={type} />
      <Fields type={type} />
      <EnumValues type={type} />
      <PossibleTypes type={type} />
    </>
  );
}

function ImplementsInterfaces({ type }: { type: GraphQLNamedType }) {
  if (!isObjectType(type)) {
    return null;
  }
  const interfaces = type.getInterfaces();
  return interfaces.length > 0 ? (
    <ExplorerSection title="Implements">
      {type.getInterfaces().map(implementedInterface => (
        <div key={implementedInterface.name}>
          <TypeLink type={implementedInterface} />
        </div>
      ))}
    </ExplorerSection>
  ) : null;
}

function Fields({ type }: { type: GraphQLNamedType }) {
  const [showDeprecated, setShowDeprecated] = useState(false);
  if (
    !isObjectType(type) &&
    !isInterfaceType(type) &&
    !isInputObjectType(type)
  ) {
    return null;
  }

  const fieldMap = type.getFields();

  const fields: ExplorerFieldDef[] = [];
  const deprecatedFields: ExplorerFieldDef[] = [];

  for (const field of Object.keys(fieldMap).map(name => fieldMap[name])) {
    if (field.deprecationReason) {
      deprecatedFields.push(field);
    } else {
      fields.push(field);
    }
  }

  return (
    <>
      {fields.length > 0 ? (
        <ExplorerSection title="Fields">
          {fields.map(field => (
            <Field key={field.name} field={field} />
          ))}
        </ExplorerSection>
      ) : null}
      {deprecatedFields.length > 0 ? (
        showDeprecated || fields.length === 0 ? (
          <ExplorerSection title="Deprecated Fields">
            {deprecatedFields.map(field => (
              <Field key={field.name} field={field} />
            ))}
          </ExplorerSection>
        ) : (
          <Button
            onClick={() => {
              setShowDeprecated(true);
            }}>
            Show deprecated fields
          </Button>
        )
      ) : null}
    </>
  );
}

function Field({ field }: { field: ExplorerFieldDef }) {
  const args =
    'args' in field ? field.args.filter(arg => !arg.deprecationReason) : [];
  return (
    <div className="graphiql-doc-explorer-item">
      <div>
        <FieldLink field={field} />
        {args.length > 0 ? (
          <>
            (
            <span>
              {args.map(arg =>
                args.length === 1 ? (
                  <Argument key={arg.name} arg={arg} inline />
                ) : (
                  <div
                    key={arg.name}
                    className="graphiql-doc-explorer-argument-multiple">
                    <Argument arg={arg} inline />
                  </div>
                ),
              )}
            </span>
            )
          </>
        ) : null}
        {': '}
        <TypeLink type={field.type} />
        <DefaultValue field={field} />
      </div>
      {field.description ? (
        <MarkdownContent type="description" onlyShowFirstChild>
          {field.description}
        </MarkdownContent>
      ) : null}
      {field.deprecationReason && (
        <div className="graphiql-doc-explorer-deprecation">
          <div className="graphiql-doc-explorer-deprecation-label">
            Deprecated
          </div>
          <MarkdownContent type="deprecation" onlyShowFirstChild>
            {field.deprecationReason}
          </MarkdownContent>
        </div>
      )}
    </div>
  );
}

function EnumValues({ type }: { type: GraphQLNamedType }) {
  const [showDeprecated, setShowDeprecated] = useState(false);

  if (!isEnumType(type)) {
    return null;
  }

  const values: GraphQLEnumValue[] = [];
  const deprecatedValues: GraphQLEnumValue[] = [];
  for (const value of type.getValues()) {
    if (value.deprecationReason) {
      deprecatedValues.push(value);
    } else {
      values.push(value);
    }
  }

  return (
    <>
      {values.length > 0 ? (
        <ExplorerSection title="Enum Values">
          {values.map(value => (
            <EnumValue key={value.name} value={value} />
          ))}
        </ExplorerSection>
      ) : null}
      {deprecatedValues.length > 0 ? (
        showDeprecated || values.length === 0 ? (
          <ExplorerSection title="Deprecated Enum Values">
            {deprecatedValues.map(value => (
              <EnumValue key={value.name} value={value} />
            ))}
          </ExplorerSection>
        ) : (
          <Button
            onClick={() => {
              setShowDeprecated(true);
            }}>
            Show deprecated fields
          </Button>
        )
      ) : null}
    </>
  );
}

function EnumValue({ value }: { value: GraphQLEnumValue }) {
  return (
    <div className="graphiql-doc-explorer-item">
      <div className="graphiql-doc-explorer-enum-value">{value.name}</div>
      {value.description ? (
        <MarkdownContent type="description">
          {value.description}
        </MarkdownContent>
      ) : null}
      {value.deprecationReason ? (
        <MarkdownContent type="deprecation">
          {value.deprecationReason}
        </MarkdownContent>
      ) : null}
    </div>
  );
}

function PossibleTypes({ type }: { type: GraphQLNamedType }) {
  const { schema } = useSchemaContext({ nonNull: true });
  if (!schema || !isAbstractType(type)) {
    return null;
  }
  return (
    <ExplorerSection
      title={isInterfaceType(type) ? 'Implementations' : 'Possible types'}>
      {schema.getPossibleTypes(type).map(possibleType => (
        <div key={possibleType.name}>
          <TypeLink type={possibleType} />
        </div>
      ))}
    </ExplorerSection>
  );
}
