import sprite from "../../assets/images/sprite.svg";
import { Wrapper, Item, Text, Button } from "./Skills.style";

const Skills = ({
  activatePinkstormSkill,
  activateBluestormSkill,
  activateYellowstormSkill,
  user,
  cdPinkstorm,
  cdBluestorm,
  cdYellowstorm,
}) => {
  return (
    <Wrapper>
      <Item>
        <Button
          color="rgb(234, 72, 132)"
          onClick={activatePinkstormSkill}
          cd={cdPinkstorm}
          disabled={cdPinkstorm > 0}
        >
          <svg fill="rgb(234, 72, 132)" width="100%" height="100%">
            <use href={sprite + "#lightning"}></use>
          </svg>
        </Button>
        <Text>{user?.skills.pinkstorm}</Text>
      </Item>
      <Item>
        <Button
          cd={cdBluestorm}
          disabled={cdBluestorm > 0}
          color="rgb(14, 180, 201)"
          onClick={activateBluestormSkill}
        >
          <svg fill="rgb(14, 180, 201)" width="100%" height="100%">
            <use href={sprite + "#lightning"}></use>
          </svg>
        </Button>
        <Text>{user?.skills.bluestorm}</Text>
      </Item>
      <Item>
        <Button
          cd={cdYellowstorm}
          disabled={cdYellowstorm > 0}
          color="rgb(216, 250, 67)"
          onClick={activateYellowstormSkill}
        >
          <svg fill="rgb(216, 250, 67)" width="100%" height="100%">
            <use href={sprite + "#lightning"}></use>
          </svg>
        </Button>
        <Text>{user?.skills.yellowstorm}</Text>
      </Item>
    </Wrapper>
  );
};

export default Skills;
