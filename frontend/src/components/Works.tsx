import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Stack, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Layout } from './Layout';
import { API_PATH } from '../ApiConfig';

type WorkType = {
  title: string;
  description: string;
  engaged_at: string;
  engaged_months: string;
  skills: { name: string }[];
};

export const Works = () => {
  const [condition, setCondition] = useState<string | undefined>();
  const Title = 'Works';

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
    if (!condition || condition.length == 0) return fetchedWorks;

    return fetchedWorks.filter((work: WorkType) => {
      const usedSkills = work.skills.map((skill) => skill.name);
      return usedSkills.includes(condition);
    });
  }, [fetchedWorks, condition]);

  return (
    <Layout title={Title}>
      <Stack spacing={4} mt={4} mb={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="経験のある開発言語を探す"
            onChange={(e) => setCondition(e.target.value)}
            defaultValue={condition}
          />
        </InputGroup>
      </Stack>

      <ul>
        {works?.map((work: WorkType, idx: number) => {
          return (
            <li key={idx}>
              {work.engaged_at}
              {work.title}
              {work.description}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
