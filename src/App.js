import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import ContainerWrapper from "./components";
import MainContainer from "./components/main";
import Sidebar from "./components/sidebar/sidebar";
const App = () => {
    const [filterName, setFilterName] = useState('');
    const [coverImage, setCoverImage] = useState('');
    return (_jsx(_Fragment, { children: _jsx(ContainerWrapper, { coverImage: coverImage, children: _jsxs("div", { className: "main-container", children: [_jsx(Sidebar, { setFilterName: setFilterName }), _jsx(MainContainer, { filterName: filterName, setCoverImage: setCoverImage })] }) }) }));
};
export default App;
