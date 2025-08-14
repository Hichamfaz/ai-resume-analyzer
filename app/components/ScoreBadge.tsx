import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let bgColor = '';
  let textColor = '';
  let label = '';

  if (score >= 69) {
    bgColor = 'bg-badge-green';
    textColor = 'text-green-800';
    label = 'Strong';
  } else if (score > 49) {
    bgColor = 'bg-badge-yellow';
    textColor = 'text-yellow-800';
    label = 'Good Start';
  } else {
    bgColor = 'bg-badge-red';
    textColor = 'text-red-800';
    label = 'Needs Work';
  }

  return (
    <div className={`${bgColor} rounded-full px-3 py-1 inline-flex items-center`}>
      <p className={`text-xs font-medium ${textColor}`}>
        {label}
      </p>
    </div>
  );
};

export default ScoreBadge;