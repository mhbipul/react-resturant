import React from "react";
import Layout from "../components/Layout/layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
          },
        }}
      >
        <Typography variant="h4">Welcome to my Resturant!</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad
          et amet saepe! Distinctio, excepturi vero sit dolores fugiat, ab
          voluptatibus aut, cumque fuga quasi veritatis pariatur nostrum
          doloremque eaque animi facilis? Quam veniam, maiores hic, eligendi
          temporibus labore consequatur itaque iste totam doloribus delectus
          quidem aliquam assumenda ut fugiat quibusdam similique, accusamus
          voluptates fugit. Quo consequuntur reiciendis obcaecati dicta iusto
          ducimus aut consectetur sapiente quibusdam deleniti tempore ullam
          voluptas error, molestiae cum unde cupiditate eveniet eligendi animi
          fugiat saepe accusantium quod magni? Iste expedita vitae, veniam id
          pariatur odit illo ipsum qui, iure earum temporibus molestiae, itaque
          rerum suscipit.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          sint repellendus quos? Error ad in doloremque sunt omnis voluptates
          optio perspiciatis quisquam. Nesciunt rem est earum repudiandae labore
          assumenda. Numquam harum unde quis exercitationem et at qui dolor
          veritatis minima id, ex perferendis reprehenderit rerum corrupti
          suscipit beatae doloremque vitae natus deserunt. Unde architecto
          consequuntur odit rerum quaerat, explicabo cum debitis consequatur a
          sunt voluptates libero iste repudiandae deleniti quas exercitationem
          at facere perferendis. Rem cupiditate laudantium fugiat, veniam
          mollitia quis perspiciatis soluta itaque doloribus facere cumque,
          maxime pariatur blanditiis temporibus aspernatur consequatur minus
          fugit iste obcaecati. Doloremque, asperiores perspiciatis?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
