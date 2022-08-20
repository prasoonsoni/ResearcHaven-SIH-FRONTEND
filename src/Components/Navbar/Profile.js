import { WrapItem, Wrap, Avatar, Tooltip } from "@chakra-ui/react";

function Profile(props) {
  return (
    <>
        <Wrap>
          <WrapItem>
            <Tooltip
              borderRadius="2px"
              label={props.first + " " + props.last}
              hasArrow
              arrowSize={10}
            >
              <Avatar name={props.first + " " + props.last} />
            </Tooltip>
          </WrapItem>
        </Wrap>
    </>
  );
}

export default Profile;
