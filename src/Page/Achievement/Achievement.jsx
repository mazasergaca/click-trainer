import React from "react";
import useSound from "use-sound";
import { MdDone } from "react-icons/md";
import { BiMedal } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useGetCurrentUserQuery } from "../../redux/base-api";
import userSelectors from "../../redux/user/user-selectors";
import { getAchievementPointsInPescent } from "../../utils/getAchievementPointsInPercent";
import { getCurrentLevelAchievement } from "../../utils/getCurrentLevelAchievement";
import AchievementSound from "../../assets/sounds/achievement.mp3";
import pressSound from "../../assets/sounds/start.mp3";
import Container from "../../components/Container/Container";
import {
  Button,
  Item,
  LinkStyled,
  List,
  MainScore,
  Name,
  Scale,
  Wrapper,
  WrapperItems,
  Title,
  Score,
} from "./Achievement.styles";

const Achievement = () => {
  const volume = useSelector(userSelectors.getVolume);
  const [playAchievementSound] = useSound(AchievementSound, { volume });
  const [playSound] = useSound(pressSound, { volume });

  const allAchievements = useSelector(userSelectors.getAllAchievements);

  const { data: user, isLoading } = useGetCurrentUserQuery();

  const dispatch = useDispatch();

  const achievementPointsInPercent = getAchievementPointsInPescent(
    allAchievements,
    user?.achievementPoints
  );

  const handleClickAchievement = (levels, indexType) => {
    playAchievementSound();
    // const points = levels[getCurrentLevelAchievement(levels)].points;
    // dispatch(
    //   changeReseived({
    //     indexType,
    //     indexLevel: getCurrentLevelAchievement(levels),
    //   })
    // );
    // dispatch(incrementAchievementPoints(points));
  };

  return (
    <Container>
      {!isLoading && (
        <Wrapper>
          <LinkStyled to="/menu" onClick={playSound}>
            ᐊ
          </LinkStyled>
          <Title>Achievement</Title>
          <Scale points={achievementPointsInPercent}>
            <MainScore>
              {user?.achievementPoints} / {allAchievements}(
              {achievementPointsInPercent})
            </MainScore>
          </Scale>
          <List>
            {Object.values(user.achievements).map((achive, index) => (
              <Item key={achive.name}>
                <Name>{achive.name}</Name>
                <WrapperItems>
                  <Score>
                    {achive.value}
                    {getCurrentLevelAchievement(achive.levels) !== null && (
                      <>
                        /
                        {
                          achive.levels[
                            getCurrentLevelAchievement(achive.levels)
                          ].value
                        }
                      </>
                    )}
                  </Score>
                  {getCurrentLevelAchievement(achive.levels) !== null ? (
                    <Button
                      onClick={() =>
                        handleClickAchievement(achive.levels, index)
                      }
                      disabled={
                        achive.value <
                        achive.levels[getCurrentLevelAchievement(achive.levels)]
                          .value
                      }
                    >
                      {
                        achive.levels[getCurrentLevelAchievement(achive.levels)]
                          .points
                      }
                      <BiMedal size={24} />
                    </Button>
                  ) : (
                    <MdDone size={24} color="#70fa7a" />
                  )}
                </WrapperItems>
              </Item>
            ))}
          </List>
        </Wrapper>
      )}
    </Container>
  );
};

export default Achievement;
