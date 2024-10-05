import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_PATH } from '../ApiConfig';

type WorkType = {
  title: string;
  description: string;
  engaged_at: string;
  engaged_months: string;
  skills: { name: string }[];
};

export const useWork = () => {
  const [condition, setCondition] = useState<string>('');

  const fetchWorks = async () => {
    return await fetch(API_PATH.works).then((res) => {
      return res?.json();
    });
  };

  const { data: fetchedWorks } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchWorks,
  });

  const works = useMemo(() => {
    if (condition.length === 0) return fetchedWorks;

    return fetchedWorks.filter((work: WorkType) => {
      const usedSkills = work.skills.map((skill) => skill.name);
      return usedSkills.includes(condition);
    });
  }, [fetchedWorks, condition]);

  return {
    works: works,
    condition: condition,
    setCondition: setCondition,
  };
};
