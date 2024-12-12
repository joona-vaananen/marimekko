import configPromise from '@payload-config';
import { getPayload } from 'payload';

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'products',
  });

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HomePage;
