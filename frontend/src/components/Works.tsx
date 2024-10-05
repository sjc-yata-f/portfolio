import { useQuery } from '@tanstack/react-query';
import { Layout } from './Layout';
import { API_PATH } from '../ApiConfig';

type JobType = {
  title: string;
  description: string;
  engaged_at: string;
};

export const Works = () => {
  const Title = 'Works';

  const fetchWorks = async () => {
    return await fetch(API_PATH.works).then((res) => {
      return res?.json();
    });
  };

  const { data: jobs } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchWorks,
  });

  return (
    <Layout title={Title}>
      <ul>
        {jobs?.map((job: JobType, idx: number) => {
          return (
            <li key={idx}>
              {job.engaged_at}
              {job.title}
              {job.description}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
