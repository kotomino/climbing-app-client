import { Box, Heading, Text } from "@chakra-ui/layout"
import Head from "next/head";

const Routes = () => {
  return (
    <>
      <Head>
        <title>Climb On | Routes</title>
        <meta name="keywords" content="routes"/>
      </Head>
      <div>
        <Heading as="h1">Routes page</Heading>
        <Box>
          Google Maps
        </Box>
      </div>
    </>
  );
}
 
export default Routes;