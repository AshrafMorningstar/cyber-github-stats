import React from 'react';
import { Composition } from 'remotion';
import { StatsCard } from './components/StatsCard';
import { ContributionGraph } from './components/ContributionGraph';
import { LanguageChart } from './components/LanguageChart';
import { AchievementBadges } from './components/AchievementBadges';
import { ProfileHeader } from './components/ProfileHeader';
import { ActivityTimeline } from './components/ActivityTimeline';
import './styles/global.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StatsCard"
        component={StatsCard}
        durationInFrames={180}
        fps={30}
        width={800}
        height={400}
      />
      <Composition
        id="ContributionGraph"
        component={ContributionGraph}
        durationInFrames={240}
        fps={30}
        width={1000}
        height={300}
      />
      <Composition
        id="LanguageChart"
        component={LanguageChart}
        durationInFrames={200}
        fps={30}
        width={600}
        height={400}
      />
      <Composition
        id="AchievementBadges"
        component={AchievementBadges}
        durationInFrames={220}
        fps={30}
        width={800}
        height={500}
      />
      <Composition
        id="ProfileHeader"
        component={ProfileHeader}
        durationInFrames={150}
        fps={30}
        width={1000}
        height={200}
      />
      <Composition
        id="ActivityTimeline"
        component={ActivityTimeline}
        durationInFrames={260}
        fps={30}
        width={900}
        height={600}
      />
    </>
  );
};
