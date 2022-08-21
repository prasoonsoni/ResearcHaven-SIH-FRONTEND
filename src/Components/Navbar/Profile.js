import { WrapItem, Wrap, Avatar, Tooltip } from "@chakra-ui/react";

function Profile(props) {
  return (
    <>
      <Wrap display="flex" align="center" justify="center">
        <WrapItem>
          <Tooltip
            borderRadius="2px"
            label={props.first + " " + props.last}
            hasArrow
            arrowSize={10}
            position="left"
          >
            <Avatar name={props.first + " " + props.last} />
          </Tooltip>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default Profile;
