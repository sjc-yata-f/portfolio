import { Layout } from './Layout';

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
