import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Accordion, Form } from 'semantic-ui-react';

export const SampleGroupAccordian = () => {
  const sampleGroupQuery = gql`
    { SampleGroup {  sampleGroupName sampleData { sampleDatumName} } }
    `;
  const { loading: sampleGroupLoading, data: sampleGroupData, error: sampleGroupError } = useQuery(sampleGroupQuery);

  const sampleGroupAccordian = (sampleGroupData: any) => {
    const { SampleGroup } = sampleGroupData;
    return SampleGroup.map(({sampleGroupName, sampleData}: {sampleGroupName: any, sampleData: any} ) => {
      const cnt = (
        <Form>
          <Form.Group grouped>
            {sampleData.map(({sampleDatumName}: {sampleDatumName: any}) => {
              return (
                <Form.Checkbox key={sampleDatumName} label={sampleDatumName} name={sampleGroupName} type='radio' value={sampleDatumName} />
              );
            })}
          </Form.Group>
        </Form>
      );
      return ({
        key: sampleGroupName,
        title: sampleGroupName,
        content: { content: cnt }
      });

      // <Accordion.Title>{sampleGroupName}</Accordion.Title>
      // <Accordion.Content>asdfasdf</Accordion.Content>
      // {
      //   sampleData.map(({ sampleDatumName }) => {
      //     return <Accordion.Title>{sampleDatumName}</Accordion.Title>
      //   })
      // }
    });
  };

  // console.log(JSON.stringify(sampleGroupData, null, 2));
  // !!sampleGroupData && console.log(JSON.stringify(sampleGroupAccordian(sampleGroupData), null, 2))
  return (
    <>
      {!sampleGroupLoading && sampleGroupData &&
        <Accordion defaultActiveIndex={0} panels={sampleGroupAccordian(sampleGroupData)} styled />}
    </>
  );

};
