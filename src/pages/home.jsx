import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import SignModal from 'component/Sign/SignModal';

const Home = () => {
  const [signModalOpen, setSignModalOpen] = useState(false);

  return (
    <>
      <SignModal setOpen={setSignModalOpen} open={signModalOpen} />
      <Button onClick={() => setSignModalOpen(true)}> 시작하기 </Button>
    </>
  );
};

export default Home;
