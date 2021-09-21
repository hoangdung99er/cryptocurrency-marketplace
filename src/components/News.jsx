import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../store/Utils/CryptoNews";
import moment from "moment";

function News({ simplified, newsCategory }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });

  const demoImage =
    "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return (
    <>
      {simplified && (
        <CustomBox sx={{ background: "background.paper" }}>
          <TypographyMui variant="h6" noWrap component="div">
            Latest Crypto News
          </TypographyMui>
          <CustomLink to="/news">
            <Button>Show more</Button>
          </CustomLink>
        </CustomBox>
      )}
      {!cryptoNews?.value ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "220px",
            alignItems: "center",
          }}
        >
          <CircularProgress size={55} />
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
                gap: 3,
              }}
            >
              {cryptoNews?.value.map((news, i) => (
                <a
                  key={i}
                  href={news.url}
                  target="_blank"
                  rel="noreferrer noreopener"
                >
                  <Card
                    sx={{
                      bgcolor: "background.paper",
                      p: 0,
                      height: "fit-content",
                      "&:hover": {
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontWeight: 600, mb: 2 }}
                        variant="body2"
                        component="div"
                        gutterBottom
                      >
                        {news.name}
                      </Typography>
                      <CustomImage
                        alt={news.url}
                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                      />
                      <Typography
                        sx={{ mt: 2 }}
                        variant="body2"
                        component="div"
                      >
                        {news.description > 100
                          ? `${news.description.substring(0, 100)}...`
                          : news.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            src={
                              news.provider[0]?.image?.thumbnail?.contentUrl ||
                              demoImage
                            }
                            alt="news"
                          />
                          <Typography
                            sx={{ ml: 1 }}
                            variant="body2"
                            component="div"
                          >
                            {news.provider[0]?.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" component="div">
                          {moment(news.datePublished).startOf("ss").fromNow()}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

const TypographyMui = styled(Typography)`
  margin: 16px 0 0 16px;
  font-size: 1.5rem;
`;

const CustomImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CustomLink = styled(Link)`
  color: "#12916b";
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const CustomBox = styled(Box)`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

export default News;
