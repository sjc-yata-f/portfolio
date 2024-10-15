import { useQuery } from '@tanstack/react-query';
import { Layout } from './Layout';
import { API_PATH } from '../ApiConfig';

type SkillType = {
  name: string;
  note: string;
};

export const Skills = () => {
  const Title = 'Skills';

  const fetchSkills = async () => {
    return await fetch(API_PATH.skills).then((res) => {
      return res?.json();
    });
  };

  const { data: skills } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  });

  return (
    <Layout title={Title}>
      <ul>
        {skills?.map((skill: SkillType, idx: number) => {
          return (
            <li key={idx}>
              {skill.name}
              {skill.note}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
