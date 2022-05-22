import useSound from "use-sound";
import { MdDone } from "react-icons/md";
import { BiMedal } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import achievementSelectors from "../../../redux/achievement/achivement-selectors";
import infoSelectors from "../../../redux/info/info-selectors";
import { changeReseived } from "../../../redux/achievement/achievement-slice";
import { incrementAchievementPoints } from "../../../redux/info/info-slice";
import { getAchievementPointsInPescent } from "../../../utils/getAchievementPointsInPercent";
import { getCurrentLevelAchievement } from "../../../utils/getCurrentLevelAchievement";
import AchievementSound from "../../../assets/sounds/achievement.mp3";
import {
  ButtonMenu,
  Container,
  TitleMenu,
  AchievementScale,
  AchievementMainScore,
  AchievementList,
  AchievementItem,
  AchievementName,
  AchievementScore,
  WrapperAchievement,
  ButtonAchievement,
} from "../Menu.styles";

const AchievementMenu = ({ changePathMenu }) => {
  const volume = useSelector(infoSelectors.getVolume);
  const [playAchievementSound] = useSound(AchievementSound, { volume });

  const dispatch = useDispatch();
  const achievement = useSelector(achievementSelectors.getAchievement);
  const achievementPoints = useSelector(infoSelectors.getAchievementPoints);

  const achievementPointsInPercent = getAchievementPointsInPescent(
    achievementPoints.all,
    achievementPoints.inStock
  );

  const handleClickAchievement = (levels, indexType) => {
    playAchievementSound();
    const points = levels[getCurrentLevelAchievement(levels)].points;
    dispatch(
      changeReseived({
        indexType,
        indexLevel: getCurrentLevelAchievement(levels),
      })
    );
    dispatch(incrementAchievementPoints(points));
  };

  return (
    <Container>
      <ButtonMenu onClick={() => changePathMenu("menu")}>back</ButtonMenu>
      <TitleMenu>Achievement</TitleMenu>
      <AchievementScale points={achievementPointsInPercent}>
        <AchievementMainScore>
          {achievementPoints.inStock} / {achievementPoints.all}(
          {achievementPointsInPercent})
        </AchievementMainScore>
      </AchievementScale>
      <AchievementList>
        {Object.values(achievement).map((achive, index) => (
          <AchievementItem key={achive.name}>
            <AchievementName>{achive.name}</AchievementName>
            <WrapperAchievement>
              <AchievementScore>
                {achive.value}
                {getCurrentLevelAchievement(achive.levels) !== null && (
                  <>
                    /
                    {
                      achive.levels[getCurrentLevelAchievement(achive.levels)]
                        .value
                    }
                  </>
                )}
              </AchievementScore>
              {getCurrentLevelAchievement(achive.levels) !== null ? (
                <ButtonAchievement
                  onClick={() => handleClickAchievement(achive.levels, index)}
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
                </ButtonAchievement>
              ) : (
                <MdDone size={24} color="#70fa7a" />
              )}
            </WrapperAchievement>
          </AchievementItem>
        ))}
      </AchievementList>
    </Container>
  );
};

export default AchievementMenu;
