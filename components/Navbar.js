import { Box, Link } from "@chakra-ui/layout"

const Navbar = () => {
  return (
    <nav>
      <Box mr="auto">
        <Link href="/">
          Logo
        </Link>
      </Box>
      <Link href="/" >Home</Link>
      <Link href="/about" ml="20px">About</Link>
      <Link href="/routes" ml="20px">Climbing Routes</Link>
    </nav>
  );
}
 
export default Navbar;