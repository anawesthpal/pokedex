import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

function Footer() {
  const pokemons = useAppSelector((state) => state.pokemons);

  return (
    <Box
      component="footer"
      width="100%"
      height="100px"
      sx={{
        backgroundColor: "#181818",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "#ffff", top: "20px" }} variant="h5">
        Total de pokemons: {pokemons.count}
      </Typography>
      <Typography sx={{ color: "#ffff" }}>
        Trabalho final do módulo de React. Desenvolvido por Ana Westhpal 👩🏼‍💻
      </Typography>
    </Box>
  );
}

export default Footer;
