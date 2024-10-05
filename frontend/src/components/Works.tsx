import { Stack, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Layout } from './Layout';
import { useWork } from './useWork';

type WorkType = {
  title: string;
  description: string;
  engaged_at: string;
  engaged_months: string;
  skills: { name: string }[];
};

export const Works = () => {
  const Title = 'Works';

  const { works, condition, setCondition } = useWork();

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
