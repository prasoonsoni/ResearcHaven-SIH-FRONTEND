import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Title, Legend } from 'chart.js';

ChartJS.register({
  Tooltip, Title, ArcElement, Legend
})

function ShowPapers() {
  const navigate = useNavigate();
  const data = {
    color: 'white',
    labels: [
      'Funded',//Green
      'Rejected', //Red
      'Submitted',//orange
      'Drafts' // white
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [3, 5, 1,4],
      backgroundColor: [
        'rgb(50,205,50)',
        'rgb(255,0,0)',
        'rgb(255, 197, 92)',
        'rgb(0, 162, 237)',
      ],
      hoverOffset: 4
    }]
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Statistics',
        color: 'white',
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        }
      }
    }

  }

  return (
    <Flex align="center">
      <Flex
        direction="column"
        w="50vw"
        h="75vh"
        gap={8}
        align="center"
        justify="center"
      >
        <Button
          w="30vw" h="10vh"
          onClick={() => {
            navigate("drafts");
          }}
        >
          Go to Drafts
        </Button>
        <Button leftIcon={<VisibilityIcon />} onClick={() => {
          navigate("/dashboard/submitted");
        }} w="30vw" h="10vh">View Submitted Proposals</Button>
        <Button leftIcon={<VisibilityIcon />} onClick={() => {
          navigate("/dashboard/funded");
        }} w="30vw" h="10vh">View Funded Proposals</Button>
      </Flex>
      <Flex w="35%" align="center" justify="center">
        <Doughnut data={data} options={options} height={200} />
      </Flex>
    </Flex>
  );
}
export default ShowPapers;
