import React from 'react';
import { StatisticCard } from '../molecules/StatisticCard.astro';
import UserIcon from '../../assets/user-icon.svg';
import CertifiedIcon from '../../assets/certified.svg';
import ScoreIcon from '../../assets/score.svg';

export const DashboardMetrics = () => (
  <div className="flex space-x-4">
    <StatisticCard       description="8.5% Up from yesterday" 
 title="Total Students" value="513" icon={
        <img src={UserIcon.src} alt="User Icon" />
    } />
    <StatisticCard title="Certified Students" value="489" icon={
        <img src={CertifiedIcon.src} alt="Certified Icon" />
    } />
    <StatisticCard title="Average Certification Score" value="84.62" icon={
        <img src={ScoreIcon.src} alt="Score Icon" />
    } />
  </div>
);
