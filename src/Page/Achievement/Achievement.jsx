import React from "react";
import useSound from "use-sound";
import { MdDone } from "react-icons/md";
import { BiMedal } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from "../../redux/base-api";
import userSelectors from "../../redux/user/user-selectors";
import { getAchievementPointsInPescent } from "../../utils/getAchievementPointsInPercent";
import { getCurrentLevelAchievement } from "../../utils/getCurrentLevelAchievement";
import AchievementSound from "../../assets/sounds/achievement.mp3";
import pressSound from "../../assets/sounds/start.mp3";
import Loader from "../../components/Loader/Loader";
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

  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation();
  const { data: user, isLoading } = useGetCurrentUserQuery();

  const achievementPointsInPercent = getAchievementPointsInPescent(
    allAchievements,
    user?.achievementPoints
  );

  const handleClickAchievement = async (levels, indexType) => {
    playAchievementSound();
    const points = levels[getCurrentLevelAchievement(levels)].points;
    const initLevels = [...levels];

    initLevels[getCurrentLevelAchievement(levels)] = {
      ...levels[getCurrentLevelAchievement(levels)],
      reseived: true,
    };

    const name =
      indexType === 0
        ? "totalGames"
        : indexType === 1
        ? "totalCoins"
        : "recordScore";
    await updateUser({
      achievementPoints: user.achievementPoints + points,
      achievements: {
        ...user.achievements,
        [name]: { ...user.achievements[name], levels: initLevels },
      },
    });
  };

  return (
    <>
      {!isLoading ? (
        <Container>
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
                            achive.levels[
                              getCurrentLevelAchievement(achive.levels)
                            ].value || isLoadingUpdate
                        }
                      >
                        {
                          achive.levels[
                            getCurrentLevelAchievement(achive.levels)
                          ].points
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
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Achievement;
