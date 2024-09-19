import { useQuery } from '@tanstack/react-query'
import { Layout } from './Layout';
import { API_PATH } from '../ApiConfig';

type JobType = {
  year: number;
  description: string;
};
const Jobs: JobType[] = [
  { year: 2000, description: 'aaa' },
  { year: 2001, description: 'bbb' },
  { year: 2002, description: 'ccc' },
  { year: 2003, description: 'ddd' },
];

export const Works = () => {
  const Title = 'Works';

  const fetchWorks = async () => {
    await fetch(API_PATH.works).then((res) => res.json());
  };

  const query = useQuery({ queryKey: ['works'], queryFn: fetchWorks });

  // console.log(query.data);

  return (
    <Layout title={Title}>
      <ul>
        {Jobs.map((job: JobType) => {
          return (
            <li>
              {job.year}:{job.description}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
