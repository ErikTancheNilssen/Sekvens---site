import React from "react";
import Layout from "../components/Layout";

import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Grid, Column } from "../components/Grid.js";
import Button from "../components/Button.js";
import pasientreiser from "../images/pasientreiser/logo.svg";
import rek from "../images/pasientreiser/rek.png";
import standard from "../images/pasientreiser/standard.png";

import styled from "styled-components";
import { Flex, Box, Text, Image, Heading } from "rebass";

const Link = styled.a`
  background: transparent;
  img {
    height: 75px;
  }
`;

const InfoBox = styled(Column)`
  text-align: center;
  border: 1px solid ${({ theme: { colors } }) => colors.b_20};
`;

const NotFoundPage = () => (
  <Layout
    title="Pasientreiser"
    introduction="Bestill reiseregningsskjema, konvolutter, veiledninger og annet
    informasjonsmateriell for pasientreiser. Dette er en kostnadsfri tjeneste, du
    betaler verken for materiell eller porto"
  >
    <Box pt={5} pb={4} bg="p4">
      <Grid>
        <Column columns={[4, 4, 12]}>
          <Menu />
        </Column>
      </Grid>
    </Box>
    <Grid>
      <Column columns={[4, 3, 8]}>
        <Box mt={7}>
          <Link
            title="Tilbake til Pasientreiser"
            href="https://pasientreiser.no/helsepersonell/bestill-materiell"
          >
            <Image mb={3} alt="Tilbake til Pasientreiser" src={pasientreiser} />
          </Link>
          <Text my={5} className="introduction">
            Bestill reiseregningsskjema, konvolutter, veiledninger og annet
            informasjonsmateriell for pasientreiser. Dette er en kostnadsfri
            tjeneste, du betaler verken for materiell eller porto.
          </Text>
          <Heading>Kom i gang</Heading>
          <Grid px={0} mt={3} mb={6}>
            <InfoBox py={5} columns={[4, 4, 6]}>
              <h5>Standardmateriell</h5>
              <a href="https://pr.no">
                <Image src={standard} />
              </a>
              <Box mt={4}>
                <Button as="a" href="https://pr.no">
                  Gå til butikk
                </Button>
              </Box>
            </InfoBox>
            <InfoBox py={5} columns={[4, 4, 6]} bg="p3_15">
              <h5>Rekvisisjonsblokk</h5>
              <a href="https://pr.no">
                <Image src={rek} />
              </a>
              <Box mt={4}>
                <Button as="a" href="https://pr.no">
                  Gå til butikk
                </Button>
              </Box>
            </InfoBox>
          </Grid>
        </Box>
      </Column>
      <Column columns={[4, 4, 6]}>
        <Box>
          <h4>Hvordan bestille materiell</h4>
          <ol>
            <li>Velg først standardmateriell eller rekvisisjonsblokk under.</li>
            <li>
              Velg målform (gjelder kun standardmateriell) og ønsket antall på.
            </li>
            <li>
              Når du har valgt ønsket materiell gå til handlekurven øverst til
              høyre. Der kan du gjerne justere antall før du velger «Gå til
              kassen».
            </li>
            <li>Fyll inn kontaktinformasjon og velg «Send ordre».</li>
          </ol>
        </Box>
        <Box mt={7}>
          <h4 id="greit-vite">Greit å vite</h4>
          <h5 id="standardmateriell">Standardmateriell</h5>
          <p>
            Du kan selv velge hvor mye informasjonsmateriell du trenger, opp til
            en viss grense. Forventet leveringstid er 3-6 dager.
          </p>
          <p>
            Ønsker du å bestille større kvanta enn det nettsiden tillater, for
            eksempel ved bestillinger fra sentrallager på sykehus, kontakt{" "}
            <a href="mailto:postmottak@pasientreiser.no">
              postmottak@pasientreiser.no
            </a>
          </p>
          <h5 id="rekvisisjonsblokkene">Rekvisisjonsblokkene</h5>
          <p>
            I de tilfellene behandleren ikke har tilgang til elektronisk
            rekvirering, eller faks, for eksempel ved nedetid i systemet,
            hjemmebesøk eller strømbrudd, kan rød papirrekvisisjon benyttes som
            reserveløsning.
          </p>
          <p>Forventet leveringstid er 6-10 dager.</p>
          <p>
            Merk at dette er en dør-til-dør leveranse slik at postboksadresse
            ikke kan benyttes. Bestillinger til postboks vil ikke bli sendt.
          </p>
          <h5 id="sporing">Sporing</h5>
          <p>
            For spørsmål vedrørende sporing av pakker på bestilt materiell, ring
            vår leverandør Erik Tanche Nilssen AS ved Kristian Dyring (
            <a href="mailto:kristian.dyring@etn.no">kristian.dyring@etn.no</a>
            ), tlf. <a href="tel:94000868">940 00 868</a> eller bruk chatten
            nederst til høyre på siden.
          </p>
          <p>
            For andre spørsmål, kontakt{" "}
            <a href="mailto:postmottak@pasientreiser.no">
              postmottak@pasientreiser.no
            </a>
          </p>
        </Box>
      </Column>
    </Grid>
    <Footer />
  </Layout>
);

export default NotFoundPage;
