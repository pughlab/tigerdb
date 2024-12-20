import { gql, isReference, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Container, Segment, Dimmer, Loader, Message, List, Divider, Dropdown, Grid, Card, Icon, Popup } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import useAnnotationVariablesQuery from '../../../hooks/pages/useAnnotationVariablesQuery'
import { useDebounce } from 'use-debounce'
import { CSVLink } from 'react-csv';
import { v4 as uuidv4 } from 'uuid';

import SegmentPlaceholder from '../../common/SegmentPlaceholder'


// import AddDatasetModal from './AddDatasetModal'
import { useLocation } from 'react-router-dom'

import Fuse from 'fuse.js';

function DropdownOptions({ filterKey, placeholder, text, value, disabled, loading, setDropdownFilters, dropdownFilters }) {

  return (

    <>
      <Segment padded>

        <Label attached='top'>
          {placeholder}
        </Label>
        <Dropdown fluid
          labeled
          selection
          multiple
          search
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          options={text.map(k => ({ key: k, text: k, value: k }))}

          onChange={(e, { value }) => setDropdownFilters({ ...dropdownFilters, [filterKey]: value })}
        />
      </Segment>
    </>
  )

}

function AnnotationListItem({ annotationVariable, searchText, score, dropdownFilters }) {
  // const { annotationVariableID, cdr3b, locus, trbv, trbj, mhc, mhcClass, epitope, epitopeGene, epitopeSpecies, reference } = annotationVariable
  // const dataset = curatedAnnotation?.dataset;  // Access dataset from the curatedDataset
  const {
    annotationVariableID, cdr3b, locus, trbv, trbj, mhc, mhcClass, epitopeAAseq, epitopeGene, epitopeSpecies, reference,
    curatedAnnotation, // Access curatedAnnotation (which contains the dataset)
    curatedDataset,    // Access curatedDataset (which contains the dataset)
  } = annotationVariable;

  const dataset = curatedAnnotation?.dataset || curatedDataset?.dataset;


  const { navigate } = useRouter()

  // let trimmedSearch = searchText.trim().split("|")
  // let highlightedCDR3b = cdr3b.replaceAll(searchText, `<span style="color: red">${searchText}</span>`);

  // In the AnnotationListItem component
  let searchTerms = searchText.split("|").map(term => term.trim()).filter(term => term.length > 0);
  let highlightedCDR3b = cdr3b;

  searchTerms.forEach(term => {
    // Create a case-insensitive regular expression for each term
    let regex = new RegExp(term, 'gi');
    highlightedCDR3b = highlightedCDR3b.replace(regex, match => `<span style="color: red">${match}</span>`);
  });

  return (
    <>
      <Popup
        inverted
        content={reference ? `Click here to go to publication (${reference})` : `Click here to go to Project (${dataset?.project?.name})`}
        position='top center'
        // color={reference ? 'black' : 'blue'}
        icon={reference ? 'book' : 'database'}
        // disabled={!reference}
        trigger={

          <List.Item as={Card} fluid style={{ cursor: 'pointer', backgroundColor: 'white' }}
            // attached='top'
            // onClick={() => navigate(annotationVariableID)}
            onClick={() => {
              if (reference) {
                if (reference.startsWith('https')) {
                  window.open(reference, '_blank');
                } else if (reference.startsWith('PMID')) {
                  let PMID = reference.split(':')[1].trim(); // Split by colon and get the number part
                  window.open(`https://pubmed.ncbi.nlm.nih.gov/${PMID}/`, '_blank');
                }
              } else {
                navigate(`/home/data/${dataset?.project?.projectID}`)
              }
            }}
          >
            <Popup
              inverted
              content='Fuzziness match (string similarity score) based on bitap algorithm'
              trigger={
                <Label as='a' color='red' ribbon content='SCORE' detail={`${((1 - score) * 100).toFixed(2)}%`} />
              }
            />
            {/* hard coded to check locus: */}
            <Label attached='top right' color={reference ? 'black' : 'white'} content={reference ? 'Annotated' : 'Unlabelled'} />
            {/* <List.Content floated='right' >
              Curated Annotation
            </List.Content> */}
            <Grid textAlign='center'>
              <Grid.Row>
                <Grid.Column>
                  <List.Header as={Header} color='blue'>
                    <div dangerouslySetInnerHTML={{ __html: highlightedCDR3b }} />
                  </List.Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3} divided textAlign='center'>
                <Grid.Column>
                  {/* <Grid.Row>
                    <Label
                      basic={!dropdownFilters['locus'].includes(locus)}
                      content='Locus' detail={`${locus}`}
                      color={dropdownFilters['locus'].includes(locus) ? "blue" : "grey"} />
                  </Grid.Row> */}
                  <Grid.Row>

                    <Label
                      basic={!dropdownFilters['trbv'].includes(trbv)}
                      content='TRBV'
                      detail={`${trbv}`}
                      color={dropdownFilters['trbv'].includes(trbv) ? "blue" : "grey"}
                    />
                  </Grid.Row>
                  <Grid.Row>

                    <Label basic={!dropdownFilters['trbj'].includes(trbj)} content='TRBJ' detail={`${trbj}`}
                      color={dropdownFilters['trbj'].includes(trbj) ? "blue" : "grey"}

                    />
                  </Grid.Row>

                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    <Label basic={!dropdownFilters['mhc'].includes(mhc)} content='MHC' detail={`${mhc}`}
                      color={dropdownFilters['mhc'].includes(mhc) ? "blue" : "grey"}

                    />

                  </Grid.Row>

                  <Grid.Row>
                    <Label basic={!dropdownFilters['mhcClass'].includes(mhcClass)} content='MHC Class' detail={`${mhcClass}`}
                      color={dropdownFilters['mhcClass'].includes(mhcClass) ? "blue" : "grey"}

                    />

                  </Grid.Row>

                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    <Label basic={!dropdownFilters['epitopeAAseq'].includes(epitopeAAseq)} content='Epitope Amino Acid Sequence' detail={`${epitopeAAseq}`}
                      color={dropdownFilters['epitopeAAseq'].includes(epitopeAAseq) ? "blue" : "grey"}

                    />

                  </Grid.Row>

                  <Grid.Row>
                    <Label basic={!dropdownFilters['epitopeGene'].includes(epitopeGene)} content='Epitope Gene' detail={`${epitopeGene}`}
                      color={dropdownFilters['epitopeGene'].includes(epitopeGene) ? "blue" : "grey"}

                    />

                  </Grid.Row>

                  <Grid.Row>
                    <Label basic={!dropdownFilters['epitopeSpecies'].includes(epitopeSpecies)} content='Epitope Species' detail={`${epitopeSpecies}`}
                      color={dropdownFilters['epitopeSpecies'].includes(epitopeSpecies) ? "blue" : "grey"}

                    />

                  </Grid.Row>

                </Grid.Column>
              </Grid.Row>

            </Grid>
            <Divider horizontal />
            {/* 
            <Button fluid color={reference ? 'grey' : 'blue'}>
                    <Icon name={reference ? 'book' : 'database'} style={{ color: 'white' }} />
                    {reference ? reference : dataset?.name}
                </Button> */}
            {reference ? (
              <Button fluid color='black'>
                <Icon name='book' style={{ color: 'white' }} />
                {reference}
              </Button>
            ) : dataset ? (
              <Button fluid color='blue'>
                <Icon name='database' style={{ color: 'white' }} />
                {dataset.name} - {dataset.project?.name}
              </Button>
            ) : null}
          </List.Item>
        }
      />

      <Divider horizontal hidden />
    </>
  )
}

const ANNOTATION_FILTERS = [
  // { filterKey: "locus", placeholder: "Locus", text: ["TRB"], disabled: true, value: ["TRB"] },
  {
    filterKey: "trbv", placeholder: "TRBV", text: ['TRBV12-3', 'TRBV20-1', 'TRBV11-2', 'TRBV5-1', 'TRBV10-2',
      'TRBV10-3', 'TRBV11-1', 'TRBV11-3', 'TRBV12', 'TRBV13', 'TRBV15',
      'TRBV18', 'TRBV19', 'TRBV2', 'TRBV21-1', 'TRBV23-1', 'TRBV27',
      'TRBV28', 'TRBV29-1', 'TRBV3', 'TRBV30', 'TRBV4-1', 'TRBV4-3',
      'TRBV5-6', 'TRBV5-8', 'TRBV6', 'TRBV6-4', 'TRBV6-5', 'TRBV6-8',
      'TRBV7-2', 'TRBV7-8', 'TRBV9', 'TRBV6-6', 'TRBV10-1',
      'TRBV11-1-or12-3', 'TRBV12-4', 'TRBV12-5', 'TRBV14', 'TRBV24-1',
      'TRBV25-1', 'TRBV3-1', 'TRBV4-2', 'TRBV5-4', 'TRBV5-5', 'TRBV6-1',
      'TRBV6-2', 'TRBV6-3', 'TRBV7-3', 'TRBV7-6', 'TRBV7-7', 'TRBV7-9',
      'TRBV1', 'nan', 'TRBV12-2', 'TRBV7', 'TRBV7-1', 'TRBV6-1-or6-5',
      'TRBV13-or16', 'TRBV16', 'TRBV2-or3-or5-2-or13-or27', 'TRBV22-1',
      'TRBV26', 'TRBV3-or6-1-or6-5-or6-6-or6-9-or9-or10-1-or10-2-or10-3',
      'TRBV3-or6-1-or6-8-or6-9-or10-3', 'TRBV3-or7-4-or12',
      'TRBV3-or9-or10-2', 'TRBV5-2', 'TRBV6-1-or10-2-or10-3',
      'TRBV6-1-or6-4-or6-5-or6-6-or6-7-or6-8-or6-9-or10-3',
      'TRBV6-1-or6-5-or10-2-or10-3', 'TRBV6-1-or6-5-or6-6-or10-2-or10-3',
      'TRBV6-1-or6-5-or6-6-or10-3',
      'TRBV6-1-or6-5-or6-6-or6-8-or6-9-or10-3', 'TRBV6-5-or10-2-or10-3',
      'TRBV6-5-or6-6', 'TRBV6-5-or6-6-or6-8-or6-9',
      'TRBV6-5-or6-6-or6-9-or10-3', 'TRBV6-7',
      'TRBV7-1-or7-3-or7-4-or7-6-or7-8-or11-2',
      'TRBV7-2-or7-3-or7-6-or7-9-or11-2', 'TRBV7-5', 'TRBV4-2-or5-1',
      'TRBV5-3', 'TRBV4']
  },
  {
    filterKey: "trbj", placeholder: "TRBJ", text: ['TRBJ2-5', 'TRBJ1-4', 'TRBJ2-3', 'TRBJ1-3', 'TRBJ1-1', 'TRBJ2-7',
      'TRBJ2-1', 'TRBJ1-2', 'TRBJ1-6', 'TRBJ1-5', 'TRBJ2-2', 'TRBJ2-6',
      'TRBJ2-4', 'nan', 'TRBJ2-5-or2-7', 'TRBJ2']
  },
  {
    filterKey: "mhc", placeholder: "MHC", text: ['A*02:01', 'B*12', 'B*35:01', 'B*35:42:01', 'A*02',
      'A*02:01:98', 'A*02:01:110', 'A*02:01:59', 'B*07', 'B*07:02',
      'E*01:01:01:03', 'A*11:01', 'A*02:01:48', 'B*35:42:01-orB*35:01',
      'B*35:08:01', 'B*35:08', 'B*08:01', 'B*35:42:01-orB*35:08:01',
      'B*08:01:29', 'B*07:02:48', 'B*44:05:01', 'A*0201-orA*0202',
      'A*25:01', 'DRB4*01:03', 'DRB1*0701', 'B*51:01', 'C*07:01',
      'C*02:02', 'B*51:01-orC*15:02', 'B*38:01', 'B*15:01', 'B*44:03',
      'C*15:02', 'A*2402', 'DRB1*0301', 'B*4002',
      'DPA1*0103-orDPB1*0402', 'A*31:01', 'B*0801', 'A*68:01', 'C*04:01',
      'DQA1*05-orDQB1*02', 'DRA*01:02:03-orDRB1*04:01:01',
      'DRA*01:01:02-orDRB1*04:01:01', 'A*02:05', 'B*35:03', 'C*08:02',
      'C*01:02', 'DQA1*05:01-orDQB1*03:01', 'DPA1*0103-orDPB1*0401',
      'C*0701', 'A*01:01:73', 'A*30:02', 'A*6602',
      'DRA*01:01:02-orDRA*01:02:03-orDRB1*04:01:01',
      'DQA1*01:11-orDQB1*05:01:01:03', 'DRA*01:02:03-orDRB5*01:01:01',
      'A*30:02-orB*15:01', 'DPA1*01:03:05-orDPB1*02:01:02', 'A*0201',
      'B*35:08-orB*51:01', 'A*24:02', 'C*12:03', 'A*03:01',
      'DQA1*0105-orDQB1*0501', 'DQA1*0201-orDQB1*0202', 'C*03:03',
      'A*01:01', 'A*01:02', 'A*01:03', 'DPA1*0103-orDPB1*0201', 'B*1501',
      'DRB1*1001', 'DPA1*0103-orDPB1*0301', 'B*1302', 'B*27:05',
      'A*0202', 'A*23:01-orA*24:02', 'C*06:02',
      'DRA*01:01:02-orDRB1*01:01:01',
      'DRA*01:01:02-orDRA*01:02:03-orDRB1*01:01:01', 'B*4402', 'C*0102',
      'B*40:01', 'B*35:01-orB*51:01', 'DRA*01-orDRB1*01',
      'DRA*01:02:03-orDRB1*01:01:01-orDRB1*04:01:01',
      'A*02:01:48-orDRA*01:02:03-orDRB1*01:01:01', 'B*37:01:10',
      'DQA1*01:02-orDQB1*06:02', 'E*01:03', 'DPB1*04:01', 'DPB1*02:01',
      'DPB1*02:01-orDPB1*04:01']
  },
  { filterKey: "mhcClass", placeholder: "MHC Class", text: ['MHCI', 'MHCII', 'MHCI-orMHCII'] },
  {
    filterKey: "epitopeAAseq", placeholder: "Epitope Amino Acid Sequence", text: ['VLEETSVML', 'EFFWDANDIY', 'IPSINVHHY', 'NLVPMVATV',
      'RPHERNGFTV', 'TPRVTGGGAM', 'VMAPRTLIL', 'GTSGSPIVNR-orGTSGSPIINR',
      'GLCTLVAML', 'YVLDHLIVV', 'EPLPQGQLTAY', 'KLVALGINAV',
      'LPEPLPQGQLTAY',
      'LPEPLPQGQLTAY-orGPEPLPQGQLTAY-orLPEGLPQGQLTAY-orLPEPLGQGQLTAY-orLPEPLPQAQLTAY-orLPEPLPQGGLTAY-orLPEPLPQGQGTAY-orLPEPLPQGQLGAY-orLPEPLPQGQLTGY',
      'RAKFKQLL', 'HPVGEADYFEY-orHPVGQADYFEY-orHPVGDADYFEY', 'FLRGRAYGL',
      'RPPIFIRRL', 'YPLHEQHGM', 'AVFDRKSDAK', 'IVTDFSVIK', 'EENLLDFVRF',
      'HSKKKCDEL', 'KLVALGINAV-orKLVALVINAV', 'SLSKILDTV',
      'p-151_154del', 'p-151-154del', 'ALPGFFPRL', 'NeoAg-KLKRGIQFL',
      'EVIVPLSGW', 'EEITKMLKFSSKKKYPLFTFVNGHS', 'p-G84D', 'p-F6S',
      'NeoAg-KGSLLPQRSDQHQPA', 'NeoAg-QGKYRGAKGSLLPQR',
      'QRKVKPQPPLSDTYLSGMPAKRRKT', 'EAGPDAVLRR', 'LAQEGTTVI', 'TLIDVPKV',
      'VTLIDVPK', 'LRSLTFSLV', 'FAAQAGAWKIY', 'VTMACINLASK', 'MAIEDILFV',
      'NHARIDAAKV', 'KTWKEKTLK', 'VQTFLGISF', 'FLEDLSPL', 'FLEDLSPLEA',
      'YLDSIVFLEDL', 'YPDYLDSIVF', 'FNGTDGSENVTGFDLSDFPALADRN',
      'MSYDNNLF', 'SDYTISFLFW', 'AVQWLRPK', 'LTSSDDLLI', 'LSKDIMFHFK',
      'NeoAg-RFLEYLPLRF', 'VKYHYELLNYIDMPVLAIHGKQKQN', 'p-P282S',
      'FRFSMIWHL', 'MLVELTPPY', 'NeoAg-LLQRLLDDRKFTVEV',
      'NeoAg-REVFLLKSL', 'NeoAg-KAQYVRLYFQVCRRH',
      'PEGEKVKIPVAIKTSPKANKEILDE', 'LGYGFVNYI', 'ALWGFFPVL', 'p-R139W',
      'p-E180D', 'p-P319A', 'AGASSIWYR', 'WAYDASTFRGL',
      'NeoAg-DMKARQKAL', 'p-D460N', 'MEVFSYHQGLKKLVEVGNSGVFRPE',
      'p-R394W', 'RSSRTLSR', 'RTWRRTRR', 'RTWRRTRRGR', 'RTWRRTRRGRR',
      'p-H2539Q', 'p-R290C', 'EAFHQSCFR', 'p-343-344del',
      'NeoAg-LLGDALLVHL', 'MYDGFSVQRL', 'VMYDGFSVQR', 'LQPFPQPELPYGSGGS',
      'QPFPQPEQPFP', 'YLEPGPVTA', 'p-G380V', 'ALWGPDPAAA_AQWGPDPAAA',
      'LQPLALEGSLQKRG', 'QPLALEGSLQKRG', 'p-R843W',
      'WWKCKKWALHIVSRLFERYGSPGNV', 'EPQNFIDSLI', 'RSAEPQNFI',
      'NeoAg-FLYEKQHEL', 'TADFDITEL', 'IPNPKAGIM', 'GADGVGKSAL',
      'p-G12V', 'p-G13D', 'NeoAg-KAKNFVTSLLSIIND', 'p-G235R',
      'FIFTSIAGIR', 'NeoAg-KRPTPTFHF', 'EVDPIGHLY', 'GVYDGREHTV',
      'KVDPIGHVY', 'GLYDGMEHL', 'FAFGEPREL', 'TAA-NAVGVYAGR',
      'FSWGAEGQRPGF', 'NPVVHFFKNIVTPR', 'VHFFKNIVTPRTPG',
      'NeoAg-EEKMISDAILELKAS', 'VQIISCQY', 'ELAGIGILTV', 'QAFWIDLFETIG',
      'p-R659H', 'ALGIGILTV_EAAGIGILTV', 'EEYLKAWTF',
      'ELAGIGILTV_AAGIGILTV', 'ELAGIGILTV_EAAGIGILTV_AAGIGILTV',
      'MAA-AAGIGILTV', 'TAA-AAGIGILTV', 'FPNVVSGL', 'NSRLAGEVY',
      'p-V307M', 'GYLRNLTWTL', 'YLRNLTWTL', 'KFDLFARL', 'VIQYFASI',
      'VQQVYYSI', 'RINATLETK', 'NeoAg-HLIDSNTLQV', 'NeoAg-YIHGRGWAL',
      'NeoAg-VRDLRDFCDLRDSRD', 'EPLHTPTIM', 'SVYWSPKGK', 'APRGPHGGAASGL',
      'SLLMWITQC', 'SLLMWITQV', 'p-P2122L', 'NeoAg-APVGGGAFSTIVEREPWDG',
      'FVVPYMIYLL', 'AVLPTSKSSQMINFTFANGGVATMR', 'QSDNGLDSDY',
      'ALHGGWTTK', 'p-P449T', 'GTDSDSSRQK', 'NeoAg-GGIVDSSKSHRVPLD',
      'NeoAg-KEIFTYKKMVEDYYK', 'IMDQVPFSV_ITDQVPFSV',
      'ITDQVPFSV_ILDQVPFSV', 'TAA-KTWGQYWQV', 'TAA-AMLGTHTMEV',
      'TAA-ITDQVPFSV', 'TAA-LIMPGQEAGLGQVPL', 'RRADRHCDF', 'RLYDRHVASA',
      'KSTSISTAMRL', 'STSISTAMR', 'TSISTAMR', 'NeoAg-TKPFEYLIATGNLRS',
      'p-A83P', 'p-L432S', 'NeoAg-KYSERVYEACIKAFD',
      'TWARHGESGSMADFHQTQGPSYSES', 'LQIWDTAGQERFPTITSSYYRGAHG',
      'NeoAg-KLPKYGVKV', 'NeoAg-AARELLTLDEKDSRRLFE', 'LPDHFGLGPV',
      'MAQMRKELDAAPWKSQKRKYIEIDS', 'QHQPNPFEV', 'LLHEYWMSLR', 'MPSNIQNF',
      'KERVMQAAC', 'RRWDEKAVDKSK', 'LLADATVEL',
      'GANGESPGGGAPVPGSSGSSALLQA', 'p-P390S', 'p-S59F', 'STYLIAQSI',
      'p-G837R', 'p-E331K', 'NeoAg/TAA-SIAPEIALEL', 'YMLNSVLENF',
      'ILAKFLHWL', 'p-R116H', 'ESDPIVAQY', 'TMEM161A', 'NeoAg-QLPDFVNQL',
      'LARASPALA', 'GAFIKKNPPGMDVQLWLVMEFCGAG', 'p-A466T', 'HMTEVVRHC',
      'NSSCMGGMNLR', 'p-T172I', 'GELIGILNAAKVPAD', 'MAA-NA',
      'TAA-FLPWHRLFL', 'TAA-SYLEQASRI', 'TAA-LLMEKEDYHSL', 'RLPSSADVEF',
      'LPEEKQP', 'FRLHNKPTF', 'MMDFFNAQM', 'MMDFFNAQM_VLDLFQGQL',
      'NeoAg-TLWEGGLFKL', 'p-R212P', 'RMFPNAPYL', 'HPNVILNSLY',
      'CLASLHPR', 'RSLGCLASLH', 'TEDEIYSRICL', 'MAFSPAVDV', 'MPLVHMAF',
      'CPTYNEVHL', 'EPSDVTETL', 'HDLBPG-200D', 'ERBB3-R55G',
      'COL6A1-G1015R', 'HHAT-R132P', 'CELSR2-Y2144C', 'MYH9-G419C',
      'LLFGYPVYV', 'PKYVKQNTLKLAT', 'GILGFVFTL',
      'GILGFVFTL_PKYVKQNTLKLAT', 'FEDLRVLSF', 'TAAQAAVVRFQEAAN',
      'RLPAKAPL', 'AAFKRSCLK', 'KLLEIAPNC', 'RSGGFSFGK', 'GLAWEWWRTV',
      'LAWEWWR', 'WEWWR', 'ECTGLAWEWWRTV']
  },
  {
    filterKey: "epitopeGene", placeholder: "Epitope Gene", text: ['IE1', 'pp65', 'UL40', 'NS3', 'BMLF1', 'BRLF1', 'BZLF1',
      'EBNA1', 'EBNA3A', 'EBNA4', 'EBNA6', 'EBV', 'ANKRD30A', 'ANO9',
      'APOO-P107L', 'ARFGEF2657-665p.P658L', 'ARVCF', 'ATG4C', 'ATL2',
      'ATP6', 'ATXN2Lp.P758L', 'ATXN2Lp.P758LII', 'BAG6', 'BPNT1',
      'BTBD7', 'C2orf16', 'CARD14', 'CARM1', 'CCNL1', 'CCR6', 'CDKN2A',
      'CENPE', 'CES2-P126S', 'CMKLR1', 'CNOT2', 'COL11A1', 'COL14A1',
      'COL6A3', 'COPB2', 'CUL4A', 'DCAKD198-207p.S199F', 'DDX18',
      'DNMT3A', 'DOPEY2', 'DQX1', 'DSTp.S5447F', 'DTX3L450-458p.L453F',
      'EDIL3p.P298F', 'EGFR', 'ELAVL4', 'EMC', 'EPN1', 'ESRP1', 'ETS1',
      'FAM135A', 'FAM173B', 'FAM50B72-80p.E78K', 'FAM63A', 'FARSA',
      'FIZ1', 'FLNA', 'FLNB', 'FN1', 'FRAS1', 'FUT1',
      'GANAB749-778p.P778L', 'GJB2', 'GLIA-OMEGA1', 'gp100', 'HIATL1',
      'INS', 'INTS5', 'IPO8', 'IQCD', 'KALRN867-875p.H869Y',
      'KIF1B-S918F', 'KIT-D165N', 'KRAS', 'LAMC1p.S1509F', 'LCP1',
      'LMBRD1', 'MACF17270-7278p.S7872F', 'MAGE', 'MAGE-A3', 'MAGE-A4',
      'MAGE-A6', 'MAGEA10', 'MAGEC1', 'MAGEC2254-262', 'MBP',
      'MDH2p.P214L', 'MED13', 'Melan-A(ELA)-A27L', 'MIM2', 'MISP',
      'MLANA', 'MLANA27-35', 'MLLT10', 'MLLT4', 'MUC6', 'KPNA2', 'MYOM2',
      'MYH6191-198', 'MYH6418-425', 'MYH6443-451', 'NCEH1111-119p.G115R',
      'NCOA5p.R91C', 'NUP205-Q471H', 'NUP214', 'NY-ESO-1', 'PCNT',
      'PDIA6p.P456S', 'PDS5A', 'PGM2', 'PHLPP2-N1186Y', 'PIK3CA',
      'PKN1-P569R', 'PLECp.P3283S', 'PLXNB2p.S1746F', 'PMEL',
      'PMEL154-162', 'PMEL177-186', 'PMEL209-217', 'PMEL589-603',
      'PNPLA6', 'POLDIP2', 'POLE', 'POLR1Bp.F378I', 'POU3F3', 'PPP2R1A',
      'PPP3CBp.188_189ME>IK', 'PVR', 'RAB1A', 'RPL582-90p.E82K',
      'RPS9p.P68S', 'SCML2', 'SDAD1', 'SGK223', 'SHPRH', 'SKP2',
      'SLFN11', 'SMC1A-L674S', 'SNX1', 'SNX7', 'SP100', 'SUZ12', 'TACC2',
      'TAF3', 'TARS', 'TCEB194-103p.P94S', 'TEAD4', 'TERT', 'THOC6',
      'TITIN', 'TMEM161A', 'TMEM214601-609p.S605F', 'TMPRSS13', 'TNIK',
      'TNRC18', 'TP53', 'TPI1', 'TYR-pool', 'TYR207-215', 'TYR466-474',
      'TYR514-524', 'Tyrosinase(310-320)', 'Tyrosinase(508-514)',
      'U2AF1', 'U2AF2', 'U2AF2_TXNDC11', 'UBE2I51-60p.P52L', 'UHRF2',
      'WT1', 'ZHX2', 'ZNF219', 'ZNF615', 'ZNF692', 'ZNFX1', 'ZSCAN22',
      'HDLBP', 'ERBB3', 'COL6A1', 'HHAT', 'CELSR2', 'MYH9',
      'E2-orE5-orE6-orE7', 'Tax', 'HA', 'M', 'M-HA', 'NP338', 'CFP10',
      'ENR', 'T-Ag']
  },
  { filterKey: "epitopeSpecies", placeholder: "Epitope Species", text: ['CEF', 'CMV', 'DENV', 'EBV', 'HCV', 'HomoSapiens', 'HPV', 'HTLV-1', 'Influenza', 'M.tuberculosis', 'MCPyV', 'S-pneumoniae'] },
]

export default function AnnotationsList({ }) {
  const [dropdownFilters, setDropdownFilters] = useState({
    // locus: ["TRB"],
    trbv: [],
    trbj: [],
    mhc: [],
    mhcClass: [],
    epitopeAAseq: [],
    epitopeGene: [],
    epitopeSpecies: []
  })

  const { data, loading, error, runQuery, searchText, setSearchText } = useAnnotationVariablesQuery(dropdownFilters)
  const [searchResults, setSearchResults] = useState([])
  const [debouncedSearchText] = useDebounce(searchText, 1000);

  const [loadingResults, setLoadingResults] = useState(false)

  console.log("SEARCH SEQUENCE DATA HERE:")
  console.log(searchResults);
  // console.log(data)

  const ITEMS_PER_PAGE = 20; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const pageOptions = Array.from({ length: totalPages }, (_, i) => ({ key: i, text: i + 1, value: i + 1 }));
  const startResultNumber = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endResultNumber = Math.min(currentPage * ITEMS_PER_PAGE, searchResults.length);

  // console.log(dropdownFilters)

  const location = useLocation()
  useEffect(() => {
    if (debouncedSearchText) {
      // runQuery({ variables: { searchText } })
      runQuery()

    }
  }, [location.key])

  useEffect(() => {
    if (debouncedSearchText) {
      // runQuery({ variables: { searchText } })
      const fuseOptions = {
        keys: ['cdr3b'],
        includeScore: true,
        threshold: 0.2, // Adjust this for more or less fuzziness
        minMatchCharLength: 0,
        useExtendedSearch: true
      };

      // // Assuming data is the array of annotation variables:
      // const fuse = new Fuse(!!data?.curatedAnnotations && data.curatedAnnotations.flatMap(ca => ca.annotationVariables), fuseOptions);


      // // Combine annotation variables and dataset variables for the search
      // const combinedData = [
      //   ...(Array.isArray(data?.curatedAnnotations) ? data.curatedAnnotations.flatMap((ca) => ca.annotationVariables) : []),
      //   ...(Array.isArray(data?.curatedDatasets) ? data.curatedDatasets.flatMap((cd) => cd.datasetVariables) : []),
      // ];

      const combinedData = [
        ...(Array.isArray(data?.curatedAnnotations)
          ? data.curatedAnnotations.flatMap((ca) =>
            ca.annotationVariables.map((av) => ({
              ...av,
              curatedAnnotation: ca  // Keep the curatedAnnotation data
            }))
          )
          : []),
        ...(Array.isArray(data?.curatedDatasets)
          ? data.curatedDatasets.flatMap((cd) =>
            cd.datasetVariables.map((dv) => ({
              ...dv,
              curatedDataset: cd  // Keep the curatedDataset data
            }))
          )
          : []),
      ];

      const fuse = new Fuse(combinedData, fuseOptions);

      const fuseResults = fuse.search(debouncedSearchText)
      setSearchResults(fuseResults)
      setLoadingResults(false)
      setCurrentPage(1)

    }
  }, [data, debouncedSearchText])

  const handleSearch = () => {
    if (debouncedSearchText) {
      // const fuse = new Fuse(!!data?.curatedAnnotations && data.curatedAnnotations.flatMap(ca => ca.annotationVariables), 
      // {
      //     keys: ['cdr3b'],
      //     includeScore: true,
      //     threshold: 0.2, // Adjust this for more or less fuzziness
      // }
      // );

      // runQuery({ variables: { searchText } })
      setLoadingResults(true)
      runQuery()
      setCurrentPage(1)


    }
  }







  return (
    <>
      {/* <Container> */}
      {/* <Message> */}


      <Divider horizontal content='SEARCH' />
      {/* <AddDatasetModal refetch={refetch} /> */}
      {/* <Button disabled fluid size='large' color='black' animated='vertical' onClick={() => console.log("clicked")}>
                        <Button.Content visible><Icon name='add' /></Button.Content>
                        <Button.Content hidden content="Add Annotation" />
                    </Button> */}
      {/* </Message> */}
      <Segment>
        <Form onSubmit={handleSearch}>

          <Form.Field control={Input}
            label='Search by CDR3b sequence(s)'
            placeholder='CASS | CASSYS | ...'
            value={searchText}
            onChange={(e, { value }) => setSearchText(value)}
            size='huge'
          />
          <Segment as={Grid} loading={loading}>
            {/* <Grid.Row > */}


            {


              ANNOTATION_FILTERS.map(filter => (
                <Grid.Column width={4}>
                  <DropdownOptions {...{ ...filter, loading, setDropdownFilters, dropdownFilters }} />
                </Grid.Column>
              ))


            }
            {/* </Grid.Row> */}

          </Segment>
          {/* <Button fluid color='teal' type="submit">SEARCH</Button> */}
          <Button fluid size='large' color='teal' animated='vertical' type='submit'>
            <Button.Content visible>
              <Icon name='search' />
            </Button.Content>
            <Button.Content hidden content="Search TIGERdb" />
          </Button>

        </Form>
      </Segment>
      <Message >

        {
          (loadingResults || loading) ?
            <>
              <Segment placeholder textAlign='center'>
                {/* <Icon size='massive' name='react' loading /> */}
                <Dimmer active inverted>
                  <Loader size='large'>Loading...</Loader>
                </Dimmer>
              </Segment>
            </> :
            !data || !(searchResults.length > 0) ?
              <SegmentPlaceholder basic icon='exclamation circle' text='No Search Results Found!'>
                {/* <Icon size='massive' name='exclamation circle' /> */}
              </SegmentPlaceholder> :
              data &&
              <>

                <CSVLink data={searchResults.flatMap(searchResult => {
                  const { __typename, annotationVariableID, ...item } = searchResult.item; // Destructure and remove propertyToRemove
                  const additionalFields = {
                    score: (1 - searchResult.score) * 100
                  }
                  // Merge item and additionalFields into a single object for CSV export
                  return {
                    ...additionalFields,
                    ...item, // This will include curatedDataset or curatedAnnotation if present
                    datasetName: item.curatedDataset?.dataset?.name || item.curatedAnnotation?.dataset?.name,
                    projectName: item.curatedDataset?.dataset?.project?.name || item.curatedAnnotation?.dataset?.project?.name,
                  };
                })}
                  filename={`${uuidv4()}_tigerdb_query_export.csv`}
                >
                  <Popup
                    flowing
                    on='hover'
                    inverted
                    position='top center'
                    trigger={
                      <Button basic color='green' fluid icon='file excel' content={`Export all results as a CSV`} />
                    }
                    content='Click to download'
                  >
                  </Popup>
                </CSVLink>
                <Divider horizontal>
                  <Header as="h4">
                    <Button.Group size='massive'>

                      <Button
                        icon
                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        <Icon name='chevron left' />
                      </Button>
                    </Button.Group>

                    {/* <Dropdown
                                inline
                                options={pageOptions}
                                value={currentPage}
                                onChange={(_, { value }) => setCurrentPage(value)}
                            /> */}

                    <span>Showing {startResultNumber} to {endResultNumber} of {searchResults.length} results </span>
                    <Button.Group size='massive'>

                      <Button
                        icon
                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        <Icon name='chevron right' />
                      </Button>
                    </Button.Group>


                  </Header>
                </Divider>
              </>
        }
        {/* <List selection size='massive' key='annotationVariable'>
                        {!!data?.curatedAnnotations &&
                            data.curatedAnnotations.map(curatedAnnotation =>
                                curatedAnnotation.annotationVariables.map(annotationVariable => {
                                    // console.log(annotationVariable); // Console log the annotationVariable
                                    return (
                                        <AnnotationListItem
                                            key={annotationVariable.annotationVariableID}
                                            annotationVariable={annotationVariable}
                                            searchText={searchText}
                                        />
                                    )
                                })
                            )
                        }
                    </List> */}
        {
          <Container>
            <List selection size='massive' key='annotationVariable'>
              {searchResults
                .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                .map(result => (
                  <AnnotationListItem
                    key={result.item.annotationVariableID}
                    annotationVariable={result.item}
                    curatedAnnotation={result.item.curatedAnnotation}
                    searchText={debouncedSearchText}
                    score={result.score}
                    dropdownFilters={dropdownFilters}
                  />
                ))}

            </List>
          </Container>

        }
        { searchResults.length > 0 &&

          <Divider horizontal>
            <Header as="h4">
              <Button.Group size='massive'>

                <Button
                  icon
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <Icon name='chevron left' />
                </Button>
              </Button.Group>

              {/* <Dropdown
                                              inline
                                              options={pageOptions}
                                              value={currentPage}
                                              onChange={(_, { value }) => setCurrentPage(value)}
                                          /> */}

              <span>Showing {startResultNumber} to {endResultNumber} of {searchResults.length} results </span>
              <Button.Group size='massive'>

                <Button
                  icon
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <Icon name='chevron right' />
                </Button>
              </Button.Group>


            </Header>
          </Divider>
        }
      </Message>
      {/* </Container> */}
    </>
  )
}