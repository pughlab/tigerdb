import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Accordion, Form } from 'semantic-ui-react';
import { sampleGroupQuery } from '../graphql/queries';
import { SampleDatum, SampleGroup } from '../types/types';

export const SampleGroupAccordian = () => {
  const { loading: sampleGroupLoading, data: sampleGroupData, error: sampleGroupError } = useQuery(sampleGroupQuery);

  const sampleGroupAccordian = (sampleGroupData: { SampleGroup: SampleGroup[] }) => {
    const { SampleGroup } = sampleGroupData;
    return SampleGroup.map(({sampleGroupName, sampleData}: {sampleGroupName: string, sampleData: SampleDatum[]} ) => {
      const cnt = (
        <Form>
          <Form.Group grouped>
            {sampleData.map(({sampleDatumName}: SampleDatum) => {
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
