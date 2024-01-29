import { Box } from "@mui/material";
import AppBarStyled from "../components/AppBarStyled";
import BotaoHome from "../components/BotaoHome";
import PokemonDetalhes from "../components/PokemonDetalhes";

function Personagem() {
    return (
        <>
            <Box component="main" height="100vh" bgcolor="#ececec">
                <AppBarStyled />
                <PokemonDetalhes />
                <BotaoHome />
            </Box>
        </>
    )
}

export default Personagem;