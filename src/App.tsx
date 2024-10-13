import React, { useState } from "react";
import ContainerWrapper from "./components";
import MainContainer from "./components/main";
import Sidebar from "./components/sidebar/sidebar";

const App: React.FC = () => {
  const [filterName, setFilterName] = useState<string>('')
  const [coverImage, setCoverImage] = useState<string>('')
  return (
    <>
      <ContainerWrapper coverImage={coverImage}>
        <div className={"main-container"}>
          <Sidebar setFilterName={setFilterName}/>
          <MainContainer filterName={filterName} setCoverImage={setCoverImage}/>
        </div>
      </ContainerWrapper>
     
    </>
  );
};

export default App;
