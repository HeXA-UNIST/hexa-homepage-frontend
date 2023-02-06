import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ display: "grid", width: "100%", gridAutoRows: "1fr" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={15} md={6}>
          <Item>
            <img
              src={`${process.env.PUBLIC_URL}/images/sample1.png`}
              className="profile"
              alt="face"
            />
            <h1>프로젝트</h1>
            <br />
            <h2>
              HeXA는 매학기 초에 승인받은 프로젝트를 진행하며 UNIST 학우들을
              위한 서비스를 개발합니다.
            </h2>
          </Item>
        </Grid>
        <Grid item xs={15} md={6}>
          <Item>
            <img
              src={`${process.env.PUBLIC_URL}/images/sample1.png`}
              className="profile"
              alt="face"
            />
            <h1>세미나</h1>
            <br />
            <h2>
              HeXA에서 각종 스터디와 내외부 연사를 초청한 세미나가 이루어집니다.
            </h2>
          </Item>
        </Grid>
        <Grid item xs={15} md={6}>
          <Item>
            <img
              src={`${process.env.PUBLIC_URL}/images/sample1.png`}
              className="profile"
              alt="face"
            />
            <h1>홈커밍데이</h1>
            <br />
            <h2>
              HeXA의 졸업생과 재학생이 만나는 자리입니다. UNIST 컴퓨터공학과와
              후원사의 지원을 통해 이루어지며 각종 진로 조언을 얻을 수 있습니다.
            </h2>
          </Item>
        </Grid>
        <Grid item xs={15} md={6}>
          <Item>
            <img
              src={`${process.env.PUBLIC_URL}/images/sample1.png`}
              className="profile"
              alt="face"
            />
            <h1>Coming Soon</h1>
            <br />
            <h2>무엇이 추가되어야 할까요?</h2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
